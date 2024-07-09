//bucle For..of
/*El bucle Forof se comportará como un bucle for, pero tiene un par de limitaciones en cuanto a hacer bucles muy personalizados o cambiar el valor del índice, puesto que no se puede.
Es un tipo de bucle creado exclusivamente para recorrer Strings o Arrays de manera más abreviada que el bucle For normal.*/
const numbers = [1, 2, 3, 4, 5, 6, 7]

//           usamos numbers.length
for (let i = 0; i < numbers.length; i++) {
  /* 
    creamos la variable element que guarde el valor de numbers[i] 
    (cada elemento del array en cada vuelta del mismo) 
    simplemente por comdidad a la hora de continuar con el código 
    */
  const element = numbers[i]

  console.log(element)
}

console.log('bucle for of :')
const numbers2 = [1, 2, 3, 4, 5, 6, 7]

// creamos la variable element
// por dentro actuará de la misma manera que en el bucle for
// obteniendo el valor de numbers[i]
// usamos después del of el array numbers
// que es el que queremos recorrer
// el bucle forof cogerá la longitud de numbers
// y numbers[i] para guardarlo en element
for (const element of numbers2) {
  console.log(element)
}

//Bucle for in
/**En bucle for in está enfocado a "recorrer" objetos.*/

const user = {
  email: 'user@user.com',
  password: 'odsfofjowf'
}

// Object.keys me devolverá un array con todas las claves
// del objeto que le mande
const allTheKeysOfMyObject = Object.keys(user)
// allTheKeysOfMyObject = ["email", "password"];

// recorremos ese array de claves con el bucle
for (let i = 0; i < allTheKeysOfMyObject.length; i++) {
  // nos guardamos cada clave en cada vuelta
  const key = allTheKeysOfMyObject[i]

  // en vez de usar . para acceder a la propiedad de un objeto
  // usamos los corchetes para poder obtener una propiedad
  // de nuestro objeto con la variable key
  // que en cada vuelta del bucle será una clave del objeto
  console.log(user[key])
}

const user2 = {
  email: 'user@user.com',
  password: 'odsfofjowf'
}

for (const key in user2) {
  console.log(user[key])
}

//bucle for each
/*El bucle for each llega en ES6 para dar una nueva sintaxis usando callbacks y arrow functions, pero será muy similar al bucle forof, sólo tendremos que acostumbrarnos a la sintaxis, aunque este sólo nos servirá para recorrer arrays, puesto que es un método de array*/

const numbers3 = [1, 2, 3, 4, 5, 6, 7]

numbers.forEach((number) => {
  console.log(number)
})
