"use strict";

/* Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. */
var nameFinder = ['Peter', 'Steve', 'Tony', 'Natasha', 'Clint', 'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'];

function finderName(param, name) {
  var index = param.indexOf(name);

  if (index !== -1) {
    return {
      found: true,
      index: index
    };
  } else {
    return {
      found: false
    };
  }
}

console.log(finderName(nameFinder, 'Tony'));