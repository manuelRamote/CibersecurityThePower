"use strict";

3; //* true / false

var alumnoDelMes = 'Kevin'; // 5
// posiciones       01234

var otraPalabra = 'laskdflks';
console.log(alumnoDelMes.includes('e')); // true

console.log(otraPalabra.includes('a')); // true
//* Declaración

function includes(palabra, pregunta) {
  var incluye = false;

  for (var i = 0; i < palabra.length; i++) {
    if (palabra[i] === pregunta) {
      incluye = true;
    }
  }

  return incluye;
} //! llamo a la función


console.log(includes(alumnoDelMes, 'e')); // true

console.log(includes(otraPalabra, 'a')); // true