"use strict";

/*Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.*/
var counterWords = ['code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 'sleep', 'code', 'enjoy', 'upgrade', 'code'];

function repeatCounter(param) {
  var wordCounts = {};

  for (var i = 0; i < param.length; i++) {
    var word = param[i];

    if (wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }

  return wordCounts;
}

console.log(repeatCounter(counterWords));