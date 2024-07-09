"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// un objeto es como una variable que tiene dentro más variables, es decir parten de una misma variable principal

/* let alumno = "Nuria"; */
var alumno = {
  nombre: 'Nuria',
  edad: 36,
  residencia: 'Venezuela',
  coche: {
    marca: 'Mazda',
    color: 'rojo'
  }
};
console.log(alumno.coche.marca);
console.log(_typeof(alumno));