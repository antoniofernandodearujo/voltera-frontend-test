import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, fetch }) => {
  const nameParam = url.searchParams.get('name')?.trim() ?? '';
  let ageData: { name: string; age: number; count: number } | null = null;

  if (nameParam) {
    const res = await fetch(`https://api.agify.io?name=${encodeURIComponent(nameParam)}`);
    if (res.ok) {
      ageData = await res.json();
    }
  }

  return {
    name: nameParam,
    ageData,
  };
};