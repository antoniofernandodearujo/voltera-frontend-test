<script lang="ts">
  import { onDestroy } from 'svelte';
  import { goto } from '$app/navigation';
  import '../styles/styles.css'

  export let data: {
    name: string;
    ageData: { name: string; age: number; count: number } | null;
  };

  let input = data.name;
  let timer: ReturnType<typeof setTimeout>;

  function onInput(e: Event) {
    clearTimeout(timer);
    const value = (e.target as HTMLInputElement).value;
    timer = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      if (value.trim()) {
        params.set('name', value.trim());
      } else {
        params.delete('name');
      }
      // Update URL without reloading
      goto(`?${params.toString()}`, { replaceState: true });
    }, 700);
  }

  onDestroy(() => clearTimeout(timer));
</script>

<div>
  <h1>Estimativa de Idade</h1>
  <input
    type="text"
    placeholder="Digite um nome..."
    value={input}
    on:input={onInput}
    autocomplete="off"
  />

  {#if data.ageData}
    <div>
      <p><strong>Nome:</strong> {data.ageData.name}</p>
      <p><strong>Idade estimada:</strong> {data.ageData.age}</p>
      <p><strong>Contagem:</strong> {data.ageData.count}</p>
    </div>
  {:else if data.name}
    <p class="result">Carregando...</p>
  {/if}
</div>