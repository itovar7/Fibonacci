# Fibonacci
Verifica si un numero pertenece a la serie de fibonacci
Notas
Desarrollo Node JS con Express

Este expone un servicio por get que recibiendo el parametro "num" 
retorna un json indicando el valor de la serie en N y N-1. 
Si el valor no pertenece a la serie de Fibonacci retorna una cadena 
indicando que el valor no pertenece a la serie.

Se debe instalar Node Js.
Los paquetes necesarios ya estan en las carpetas de la aplicacion.
ejecutar por consola en la ruta de la carpeta el comando "node server.js"
levanta un servidor virtual al cual pueden acceder en la 
ruta "http://localhost:8888?num=7"

Este fue desarrolado en una logica simple de recrear la seri hasta el numero
indicado guardando en variable auxiliares los dos ultimos valores antes de 
salir del ciclo que lo genera para luego mostrarlo
