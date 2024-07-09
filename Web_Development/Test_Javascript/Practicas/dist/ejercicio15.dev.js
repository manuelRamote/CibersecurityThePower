"use strict";

/*Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". */
var products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (var i = 0; i < products.length; i++) {
  if (products[i].includes('Camiseta')) {
    console.log(products[i]);
  }
}