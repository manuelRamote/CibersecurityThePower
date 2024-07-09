"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var frase = 'Hoy hace un mal día';
console.log(_typeof(frase)); // string

var nombre = 'Eva';
var edad = 25;
console.log(nombre + ' que tiene la edad de: ' + edad + ' años, es una muy buena alumna de la escuela.'); // con los `` podemos INTERPOLAR variables en nuestro texto con ${}

console.log("".concat(nombre, " que tiene la edad de: ").concat(edad, " a\xF1os, es una muy buena alumna de la escuela")); //! TIPO DE DATO ITERABLE - STRING Y LOS ARRAYS

var fruta = 'MaNgo'; // 5
// posiciones  01234

console.log(fruta[4]); //? METODOS DE STRING

console.log(fruta.length); // 5

console.log(fruta.toUpperCase()); // mayúsculas MANGO

console.log(fruta.toLowerCase()); // minúsculas mango

console.log(fruta.includes('a')); // true
//! el usuario o la contraseña son incorrectos

var email = ' maria@thepower.com';
var password = 'lksadflaksd';
console.log(email);
console.log(email.trim());