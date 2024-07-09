"use strict";

/*1.1 Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};

1.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; 
Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

1.3 Dado el siguiente código, imprime con un console.log la suma del precio de
ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

1.4 Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};*/
//1.1
var character = {
  name: 'Jack Sparrow',
  age: 10
};
character.age = 25;
console.log('Pirata: ' + character.name, character.age); //1.2

var firstName = 'Jon';
var lastName = 'Snow';
var age = 24;
console.log("Soy ".concat(firstName, " ").concat(lastName, ", tengo ").concat(age, " a\xF1os y me gustan los lobos.")); //1.3

var toy1 = {
  name: 'Buss myYear',
  price: 19
};
var toy2 = {
  name: 'Rallo mcKing',
  price: 29
};
var totalPrice = toy1.price + toy2.price;
console.log(totalPrice); //1.4

var globalBasePrice = 10000;
globalBasePrice = 25000;
var car1 = {
  name: 'BMW m&m',
  basePrice: 50000,
  finalPrice: 60000
};
var car2 = {
  name: 'Chevrolet Corbina',
  basePrice: 70000,
  finalPrice: 80000
};
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car1);
console.log(car2);