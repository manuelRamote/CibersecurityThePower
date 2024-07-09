"use strict";

/**Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
 */
var places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor'];
var div = document.querySelector("[data-function='printHere']");
var ul = document.createElement('ul');

for (var _i = 0, _places = places; _i < _places.length; _i++) {
  var place = _places[_i];
  var li = document.createElement('li');
  li.textContent = place;
  ul.appendChild(li);
}

div.appendChild(ul);