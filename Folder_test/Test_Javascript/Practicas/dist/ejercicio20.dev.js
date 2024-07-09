"use strict";

/*Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys*/
var popularToys = [];
var toys = [{
  id: 5,
  name: 'Buzz MyYear',
  sellCount: 10
}, {
  id: 11,
  name: 'Action Woman',
  sellCount: 24
}, {
  id: 23,
  name: 'Barbie Man',
  sellCount: 15
}, {
  id: 40,
  name: 'El gato con Guantes',
  sellCount: 8
}, {
  id: 40,
  name: 'El gato felix',
  sellCount: 35
}];

for (var _i = 0, _toys = toys; _i < _toys.length; _i++) {
  var toy = _toys[_i];

  if (toy.sellCount >= 15) {
    popularToys.push(toy);
  }
}

console.log(popularToys);