"use strict";

//if
var age = 18;

if (age >= 18) {
  console.log('Eres mayor de edad');
} //if..else


var age2 = 17;

if (age2 >= 18) {
  // este código no se ejecuta porque la condición no se cumple
  console.log('Eres mayor de edad');
} else {
  // por aquí pasa el código y se lee el log
  console.log('Eres menor de edad');
} //if..else if..else


var age3 = 18;

if (age3 > 18) {
  // este código no se ejecuta porque la condición no se cumple
  console.log('Eres mayor de edad');
} else if (age3 === 18) {
  // por aquí pasa el código y se lee el log
  console.log('Tienes 18 años');
} else {
  // este código no se ejecuta porque se cumplió la condición de arriba
  console.log('Eres menor de edad');
} //switch


var superhero = 'Spider-Man';

switch (superhero) {
  case 'Spider-Man':
    console.log('Su nombre real es Peter Parker');
    break;

  case 'Daredevil':
    console.log('Su nombre real es Matt Murdock');
    break;

  case 'Iron Man':
    console.log('Su nombre real es Tony Stark');
    break;

  case 'Ant-Man':
    console.log('Su nombre real es Scott Lang');
    break;

  case 'Black Widow':
    console.log('Su nombre real es Natasha Romanov');
    break;

  default:
    console.log('No hay superheroe');
    break;
}