# Revisión técnica — JavaScript P1

## Qué es

Es un conjunto de prácticas educativas de JavaScript, no una sola aplicación. Incluye fundamentos del lenguaje, un ejercicio básico de gestión académica de campers y ejercicios sobre promesas.

## Problemas corregidos

- Se añadió `index.html` en la raíz para abrir el proyecto desde un menú.
- Se añadieron `LEEME_PRIMERO.txt` y `ABRIR_PROYECTO.bat` para facilitar la apertura en Windows.
- Se corrigió la ruta al JavaScript del Día 5; el HTML antes apuntaba a una carpeta/archivo inexistente.
- Se corrigió el alcance de `saludarAsync` en el Día 5, que se utilizaba fuera de la función donde estaba declarada.
- Se corrigió la ruta del archivo JavaScript de la Tarea.
- Se conectó el archivo JavaScript del Día 6 y se normalizaron sus nombres de archivo.
- Se completaron las páginas HTML que estaban vacías o no mostraban una explicación.
- Se agregó una salida visible para los mensajes `console.log`, conservando también la consola del navegador.

## Limitaciones del ejercicio CampusLands

El ejercicio de CampusLands es una práctica inicial, no un sistema académico completo. La información vive en arreglos en memoria y se pierde al recargar; varias funciones del enunciado original todavía no están desarrolladas (gestión completa de trainers/rutas, horarios y fechas de matrícula, reportes consolidados y persistencia). La asignación y evaluación de datos también requieren validaciones adicionales antes de usarse con información real.

## Cómo abrir

1. Extrae el ZIP completo.
2. Abre `index.html` con doble clic, o ejecuta `ABRIR_PROYECTO.bat` en Windows.
3. Entra a cada práctica desde las tarjetas del menú. No abras los archivos `.js` directamente.

Las prácticas que usan `prompt()` o `alert()` mostrarán ventanas emergentes como parte de su funcionamiento.
