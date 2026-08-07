# Carta de amor

## Cómo correrlo

1. Instala las dependencias (solo la primera vez):
   ```
   npm install
   ```
2. Levanta el servidor de desarrollo:
   ```
   npm run dev
   ```
3. Abre la URL que te muestre la terminal (normalmente http://localhost:5173).

## Cómo agregar contenido

Todo el contenido (nombre, fotos, textos) se edita en un solo archivo:

`src/data/content.js`

1. Cambia `NOMBRE_NOVIA` por el nombre real.
2. Copia tus fotos dentro de `src/assets/fotos/`.
3. Agrega un objeto `{ foto, texto }` al arreglo `secciones` por cada sección que quieras. El orden en el arreglo es el orden en que aparecerán.

No necesitas tocar ningún otro archivo para ir agregando contenido.

## Estructura

```
src/
  App.jsx              -> controla el avance entre pantallas
  data/content.js       -> AQUÍ SE EDITA EL CONTENIDO
  components/
    Landing.jsx         -> pantalla "Hola, [nombre]"
    Seccion.jsx          -> pantalla de foto + texto
    Final.jsx            -> pantalla de cierre (editar mensaje final)
  App.css               -> estilos de las pantallas
  index.css             -> estilos base / variables de color y tipografía
```
