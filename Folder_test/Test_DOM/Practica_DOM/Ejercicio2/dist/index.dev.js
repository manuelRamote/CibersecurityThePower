"use strict";

/* 1.1 Inserta dinamicamente en un html un div vacio con javascript.

1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript.

1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.

1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here
*/
//1.1
var div = document.createElement('div');
document.body.appendChild(div); //1.2

var div2 = document.createElement('div');
var p = document.createElement('p');
p.textContent = 'Hola, soy un párrafo dinámico!';
div2.appendChild(p);
document.body.appendChild(div2); //1.3

var div3 = document.createElement('div');

for (var i = 0; i <= 6; i++) {
  var _p = document.createElement('p');

  _p.textContent = "P\xE1rrafo ".concat(i + 1);
  div3.appendChild(_p);
}

document.body.appendChild(div3); //1.4

var dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP); //1.5

var h2Element = document.querySelector('.fn-insert-here');
h2Element.textContent = 'Wubba Lubba dub dub'; //1.6

var apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
var ul = document.createElement('ul');

for (var _i = 0; _i < apps.length; _i++) {
  var li = document.createElement('li');
  li.textContent = apps[_i];
  ul.appendChild(li);
}

document.body.appendChild(ul); //1.7

var elementsToRemove = document.querySelectorAll('.fn-remove-me');

for (var _i2 = 0; _i2 < elementsToRemove.length; _i2++) {
  elementsToRemove[_i2].remove();
} //1.8


var div18 = document.querySelector('div');
var div181 = document.querySelector('div:nth-child(2)');
var pElement = document.createElement('p');
pElement.textContent = 'Voy en medio!';
div18.insertAdjacentElement('afterend', pElement); //1.9

var divs = document.querySelectorAll('.fn-insert-here');

for (var _i3 = 0; _i3 < divs.length; _i3++) {
  var _p2 = document.createElement('p');

  _p2.textContent = 'Voy dentro!';

  divs[_i3].appendChild(_p2);
}