"use strict";

/*Usa un bucle para recorrer el array de productos (products) y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos.*/
var goodProducts = [];
var badProducts = [];
var products = [{
  name: 'Funko Dr. Strange',
  sellCount: 10
}, {
  name: 'Mochila de protones: Ghostbusters',
  sellCount: 302
}, {
  name: 'Sable laser FX',
  sellCount: 23
}, {
  name: 'Varita de Voldemort',
  sellCount: 6
}];

for (var i = 0; i < products.length; i++) {
  var product = products[i];

  if (product.sellCount > 20) {
    goodProducts.push(product);
  } else {
    badProducts.push(product);
  }
}

console.log('Productos con más de 20 ventas:', goodProducts);
console.log('Productos con menos de 20 ventas:', badProducts);