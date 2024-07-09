"use strict";

/* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.

1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'. */
//1.1
for (var i = 0; i < 10; i++) {
  console.log('Valor de i ' + i);
} //1.2


for (var _i = 0; _i <= 9; _i++) {
  if (_i % 2 === 0) {
    console.log('Valor de i ' + _i);
  }
} //1.3


for (var _i2 = 1; _i2 <= 10; _i2++) {
  if (_i2 === 10) {
    console.log('Dormido!');
  } else {
    console.log('Intentando dormir 🐑');
  }
}