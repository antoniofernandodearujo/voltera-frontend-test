<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Voltera Test</title>
    </head>

    <body>
        <script lang="ts">
          import '../styles/styles.css';
          import { saudacao } from '$lib/utils';
          
          let nome: string = 'Antonio';
          let message: string = saudacao(nome);
        </script>

        <style>
          h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
        </style>

        <h1>{message}</h1>
    </body>
</html>