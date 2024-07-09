"use strict";

//bucle For..of

/*El bucle Forof se comportará como un bucle for, pero tiene un par de limitaciones en cuanto a hacer bucles muy personalizados o cambiar el valor del índice, puesto que no se puede.
Es un tipo de bucle creado exclusivamente para recorrer Strings o Arrays de manera más abreviada que el bucle For normal.*/
var numbers = [1, 2, 3, 4, 5, 6, 7]; //           usamos numbers.length

for (var i = 0; i < numbers.length; i++) {
  /* 
    creamos la variable element que guarde el valor de numbers[i] 
    (cada elemento del array en cada vuelta del mismo) 
    simplemente por comdidad a la hora de continuar con el código 
    */
  var element = numbers[i];
  console.log(element);
}

console.log('bucle for of :');
var numbers2 = [1, 2, 3, 4, 5, 6, 7]; // creamos la variable element
// por dentro actuará de la misma manera que en el bucle for
// obteniendo el valor de numbers[i]
// usamos después del of el array numbers
// que es el que queremos recorrer
// el bucle forof cogerá la longitud de numbers
// y numbers[i] para guardarlo en element

for (var _i = 0, _numbers = numbers2; _i < _numbers.length; _i++) {
  var _element = _numbers[_i];
  console.log(_element);
} //Bucle for in

/**En bucle for in está enfocado a "recorrer" objetos.*/


var user = {
  email: 'user@user.com',
  password: 'odsfofjowf'
}; // Object.keys me devolverá un array con todas las claves
// del objeto que le mande

var allTheKeysOfMyObject = Object.keys(user); // allTheKeysOfMyObject = ["email", "password"];
// recorremos ese array de claves con el bucle

for (var _i2 = 0; _i2 < allTheKeysOfMyObject.length; _i2++) {
  // nos guardamos cada clave en cada vuelta
  var key = allTheKeysOfMyObject[_i2]; // en vez de usar . para acceder a la propiedad de un objeto
  // usamos los corchetes para poder obtener una propiedad
  // de nuestro objeto con la variable key
  // que en cada vuelta del bucle será una clave del objeto

  console.log(user[key]);
}

var user2 = {
  email: 'user@user.com',
  password: 'odsfofjowf'
};

for (var _key in user2) {
  console.log(user[_key]);
} //bucle for each

/*El bucle for each llega en ES6 para dar una nueva sintaxis usando callbacks y arrow functions, pero será muy similar al bucle forof, sólo tendremos que acostumbrarnos a la sintaxis, aunque este sólo nos servirá para recorrer arrays, puesto que es un método de array*/


var numbers3 = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach(function (number) {
  console.log(number);
});