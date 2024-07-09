"use strict";

/*Calcular promedio de strings: Crea una función que reciba por parámetro un array y 
cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.* */
var mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  var total = 0;
  var count = 0;

  for (var i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      total = total + param[i];
    } else if (typeof param[i] === 'string') {
      total = total + param[i].length;
    }

    count++;
  }

  return total / count;
}

console.log(averageWord(mixedElements));