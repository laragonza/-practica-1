# Práctica 1 

La app consulta la SWAPI https://swapi.dev/api/people/ y muestra los personajes en tarjetas. También he añadido un botón para cargar la página siguiente y así ver más resultados.

Comandos que usé

1) Ir a la carpeta del ejercicio:
cd ~/Practicanum1/practica-1

2) Instalar dependencias:
npm install

3) Ejecutar el servidor de desarrollo:
npm run dev

Qué hay en el código

- `src/api/api.ts`: aquí puse un cliente `axios` con baseURL que se puede configurar desde `.env`. Si no pones `.env`, usa la URL pública de SWAPI por defecto. Yo puse en el .env : VITE_API_URL=https://swapi.dev/api
- `src/App.tsx`: componente principal — aquí está la lógica de llamada a la API con `useEffect`, y gestiono los estados `characters`, `loading`, `error` y `nextUrl`.
- `src/components/CharacterList`: recibe la lista por props y la pinta.
- `src/components/CharacterCard`: pinta la tarjeta individual (Nombre, Género, Año nacimiento).
- `src/components/Loader` y `src/components/Error`: son componentes pequeños para mostrar "Cargando..." o errores.

Cómo implementé la paginación (y un link que me ayudó)

La API devuelve en la respuesta un campo `next` con la URL de la página siguiente. En `App` guardo ese `next` y cuando el usuario pulsa "Siguiente Página" hago otra petición a esa URL y añado los resultados al estado (no los reemplazo). Para entenderlo mejor seguí un tutorial sobre paginación en React que me ayudó bastante:

- Tutorial usado para entender la paginación: https://www.freecodecamp.org/news/how-to-react-components/ (lo leí y adapté la idea a usar la `next` que da SWAPI)
- Además usé la documentación de SWAPI para ver la estructura de la respuesta: https://swapi.dev/documentation

Por si quieres ver cómo uso `fetch`/axios en general, también me apoyé en MDN sobre Fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

Cómo cumple los requisitos (resumen sencillo)

- Llamada a la API: sí, `useEffect` llama a `/people/` al montar.
- Estados: manejo `loading` (muestro `Loader`), `error` (muestro `ErrorMessage`) y `characters`.
- Paginación: el botón "Siguiente Página" llama a la URL `next` y acumula resultados.
- Componentes: todo está separado en componentes (`App`, `CharacterList`, `CharacterCard`, `Loader`, `Error`).

Problemas que tuve y cómo los solucioné (por si te pasa)

- `sh: 1: vite: not found`: significa que no están instaladas las dependencias. Solución: `npm install` en la carpeta `practica-1`.
- le he dicho a chatgpt que me diga que poner en el .gitignore para solo subir lo deseado en el git

