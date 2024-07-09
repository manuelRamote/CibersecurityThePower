"use strict";

var i = 0; // i = index = índice

var array = ['🎅', '🤶', '👼', '🕵️‍♂️', '👷‍♀️', '👩‍🌾']; // 6
// posiciones    0     1      2     3     4      5

/* while (i < 7) {
    console.log(array[i]);
    if (array[i] === "👷‍♀️") {
        console.log("Se incluye en nuestra lista el emoji que estaba buscando 👷‍♀️");
    }
    i++;
} */

/* do {
    console.log(array[i]);
    if (array[i] === "👷‍♀️") {
        console.log("Se incluye en nuestra lista el emoji que estaba buscando 👷‍♀️");
    }
    i++;
} while (i < 7); */

/* for (let i = 0; i < 7; i++) {
    console.log(array[i]);
    if (array[i] === "👷‍♀️") {
        console.log("Se incluye en nuestra lista el emoji que estaba buscando 👷‍♀️");
    }
} */
//! esto es lo más común a la hora de trabajar con bucles

for (var _i = 0; _i < array.length; _i++) {
  console.log(array[_i]);

  if (array[_i] === '👷‍♀️') {
    console.log('Se incluye en nuestra lista el emoji que estaba buscando 👷‍♀️');
  }
}