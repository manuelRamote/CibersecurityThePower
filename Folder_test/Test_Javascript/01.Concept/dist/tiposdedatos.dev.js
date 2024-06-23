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