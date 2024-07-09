"use strict";

/*Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.*/
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
var totalSales = 0;

for (var i = 0; i < products.length; i++) {
  totalSales += products[i].sellCount;
}

console.log('Total de ventas:', totalSales);