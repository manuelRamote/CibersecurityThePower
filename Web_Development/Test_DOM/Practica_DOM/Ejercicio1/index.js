/**1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con 
la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */

//1.1
console.log(document.querySelector('.showme'))

//1.2
console.log(document.querySelector('#pillado'))

//1.3
console.log(document.querySelectorAll('p'))

//1.4
console.log(document.querySelectorAll('.pokemon'))

//1.5
console.log(document.querySelectorAll("[data-function='testMe']"))

//1.6
let newArray = document.querySelectorAll("[data-function='testMe']")
console.log(newArray[2])
