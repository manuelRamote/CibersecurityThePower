"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var firstName = 'Manuel';
var num = 25;
var comida = ['Pan', 'Agua', 'Patata'];
var objeto = {
  color: 'marron',
  precio: 250,
  material: {
    name: 'cuero',
    color: 'marron',
    price: 68
  }
};
var nodefinido = undefined;
var nulo = null;
var _boolean = false;
var elementos = [1, 'Manzana', true, {
  color: 'azul'
}, 9.34];
var frutas = ['pomelo', 'pera', 'manzana', 'naranja', 'mandarina']; // posiciones:    0        1        2          3           4

console.log(frutas[0]); // pomelo

console.log(frutas[4]); // mandarina

console.log(objeto);
console.log(objeto.color); // marron

console.log(objeto['color']); // marron
///////

var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var food = ['Apple', 'Mango', 'Orange'];
var today = new Date();

_typeof(myFun); // "function"


_typeof(shape); // "string"


_typeof(size); // "number"


_typeof(food); // "object"


_typeof(today); // "object"


typeof doesntExist === "undefined" ? "undefined" : _typeof(doesntExist); // "undefined"

_typeof(true); // "boolean"


_typeof(null); // "object"
//Metodos de string//
// Longitud de la cadena


str.length; // Encontrar la posición de la primera coincidencia de una cadena

str.indexOf('texto'); // Encontrar la posición de la última coincidencia de una cadena

str.lastIndexOf('texto'); // Extraer una parte de una cadena

str.slice(inicio, fin); // Reemplazar una parte de una cadena con otra cadena

str.replace('cadenaAntigua', 'cadenaNueva'); // Convertir a mayúsculas

str.toUpperCase(); // Convertir a minúsculas

str.toLowerCase(); // Concatenar dos o más cadenas

str.concat('cadena1', 'cadena2'); // Eliminar espacios en blanco al principio y al final

str.trim(); // Dividir una cadena en un array de subcadenas

str.split('separador'); // Convertir una cadena en un array de caracteres

str.split(''); // Extraer una parte de una cadena y devolver la parte extraída

str.substring(inicio, fin); // Convertir una cadena en un array de caracteres Unicode

str.split(''); // Comprueba si una cadena comienza con ciertos caracteres

str.startsWith('texto'); // Comprueba si una cadena termina con ciertos caracteres

str.endsWith('texto'); // Comprueba si una cadena incluye ciertos caracteres

str.includes('texto'); // Devuelve la cadena entre las posiciones especificadas

str.substr(inicio, longitud); // Devuelve el código Unicode del carácter en una posición específica

str.charCodeAt(posición); //Funciones de Math//
// Valor absoluto

Math.abs(-10); // Redondea hacia arriba al entero más cercano

Math.ceil(4.3); // Trunca hacia abajo al entero más cercano

Math.floor(4.7); // Retorna el número más grande de una lista de argumentos

Math.max(5, 2, 8, 1, 4); // Retorna el número más pequeño de una lista de argumentos

Math.min(5, 2, 8, 1, 4); // Eleva un número a una potencia especificada

Math.pow(2, 3); // Retorna un número aleatorio entre 0 y 1

Math.random(); // Redondea al entero más cercano

Math.round(4.7); // Retorna el signo de un número

Math.sign(-3); // Retorna la raíz cuadrada de un número

Math.sqrt(16); // Retorna el seno de un ángulo en radianes

Math.sin(Math.PI / 2); // Retorna el coseno de un ángulo en radianes

Math.cos(Math.PI); // Retorna la tangente de un ángulo en radianes

Math.tan(Math.PI / 4); // Retorna el arco seno de un número en radianes

Math.asin(0.5); // Retorna el arco coseno de un número en radianes

Math.acos(0.5); // Retorna el arco tangente de un número en radianes

Math.atan(1); // Retorna el logaritmo natural (base e) de un número

Math.log(1); // Retorna e elevado a la potencia de un número

Math.exp(1); // Valor de Pi (π)

Math.PI; // Valor de la base del logaritmo natural (e)

Math.E; //Funciones de Boolean//

var alumns = [{
  name: 'Paula',
  approved: true
}, {
  name: 'Alejandro',
  approved: false
}, {
  name: 'David',
  approved: true
}, {
  name: 'Rocío',
  approved: true
}]; //Arrays

var frutas2 = ['pomelo', 'naranja', 'mandarina']; // longitud = 3

var numeros = [32, 32.23, 219, 210, 1]; // longitud = 5

var booleans = [true, false, false, true]; // longitud = 4

var coches = [{
  color: 'rojo',
  marca: 'Honda'
}, {
  color: 'azul',
  marca: 'Seat'
}, {
  color: 'verde',
  marca: 'Peugeot'
}]; // longitud = 3

var listas = [['esto', 'es', 'una', 'lista', 'hija', 'de', 'otra'], [], []]; // longitud = 3
//Accediendo posicion array

var array = ['elemento1', 'elemento2', 'elemento3']; // posiciones       0            1            2

var posicion = 1;
console.log(array[0]); // elemento1

console.log(array[posicion]); // elemento2
// 1

console.log(array[posicion + 1]); // elemento3
// 1 + 1 = 2
//Metodos de array

var array1 = [1, 2, 3, 4, 5]; // 1. push(): Añade uno o más elementos al final del array y devuelve la nueva longitud del array.

array.push(6); // 2. pop(): Elimina el último elemento de un array y lo devuelve.

var ultimoElemento = array.pop(); // 3. shift(): Elimina el primer elemento de un array y lo devuelve.

var primerElemento = array.shift(); // 4. unshift(): Añade uno o más elementos al inicio de un array y devuelve la nueva longitud del array.

array.unshift(0); // 5. slice(): Devuelve una copia de una parte del array dentro de un nuevo array.

var subArray = array.slice(2, 4); // 6. splice(): Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

array.splice(2, 1, 'a', 'b', 'c'); // 7. concat(): Retorna un nuevo array que resulta de la concatenación de dos o más arrays.

var array2 = ['x', 'y', 'z'];
var newArray = array.concat(array2); // 8. indexOf(): Devuelve el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si no está presente.

var indice = array.indexOf(3); // 9. forEach(): Ejecuta una función dada una vez por cada elemento del array.

array.forEach(function (elemento) {
  console.log(elemento);
}); // 10. map(): Crea un nuevo array con los resultados de llamar a una función dada en cada elemento del array.

var nuevoArray = array.map(function (elemento) {
  return elemento * 2;
}); // 11. filter(): Crea un nuevo array con todos los elementos que cumplan una condición dada.

var arrayFiltrado = array.filter(function (elemento) {
  return elemento > 3;
}); // 12. reduce(): Aplica una función a un acumulador y a cada elemento (de izquierda a derecha) para reducirlo a un solo valor.

var suma = array.reduce(function (acumulador, elemento) {
  return acumulador + elemento;
}, 0); // 13. find(): Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

var encontrado = array.find(function (elemento) {
  return elemento > 3;
}); // 14. sort(): Ordena los elementos de un array localmente y devuelve el array ordenado.

array.sort(); // 15. reverse(): Invierte el orden de los elementos de un array in-place.

array.reverse(); //Estructura de objeto

var coche = {
  color: 'Rojo',
  marca: 'Seat',
  ruedas: 4,
  puertas: 5,
  garantia: {
    fechaLimite: '20/12/2024',
    precioLimite: 2342,
    compania: {
      nombre: 'segurosThePower',
      sucursales: ['Madrid', 'Barcelona', 'Murcia', 'Valencia']
    }
  }
};
console.log(coche.garantia.compania.sucursales.length + ' sucursales tiene la compañía'); // 4 sucursales tiene la compañía