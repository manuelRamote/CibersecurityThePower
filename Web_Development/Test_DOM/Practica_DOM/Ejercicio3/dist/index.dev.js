"use strict";

/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.
*/
//1.1
var countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
var ul = document.createElement('ul');

for (var _i = 0, _countries = countries; _i < _countries.length; _i++) {
  var country = _countries[_i];
  var li = document.createElement('li');
  li.textContent = country;
  ul.appendChild(li);
}

document.body.appendChild(ul); //1.2

var eliminar = document.querySelector('.fn-remove-me');
eliminar.remove(); //1.3

var cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
var ulCars = document.createElement('ul');

for (var _i2 = 0, _cars = cars; _i2 < _cars.length; _i2++) {
  var car = _cars[_i2];

  var _li = document.createElement('li');

  _li.textContent = car;

  _li.setAttribute('data-function', 'printHere');

  ulCars.appendChild(_li);
}

document.body.appendChild(ulCars); //1.4

var countries2 = [{
  title: 'Random title',
  imgUrl: 'https://picsum.photos/300/200?random=1'
}, {
  title: 'Random title',
  imgUrl: 'https://picsum.photos/300/200?random=2'
}, {
  title: 'Random title',
  imgUrl: 'https://picsum.photos/300/200?random=3'
}, {
  title: 'Random title',
  imgUrl: 'https://picsum.photos/300/200?random=4'
}, {
  title: 'Random title',
  imgUrl: 'https://picsum.photos/300/200?random=5'
}];

for (var _i3 = 0, _countries2 = countries2; _i3 < _countries2.length; _i3++) {
  var _country = _countries2[_i3];
  var div = document.createElement('div');
  var title = document.createElement('h4');
  var img = document.createElement('img');
  title.textContent = _country.title;
  img.src = _country.imgUrl;
  div.appendChild(title);
  div.appendChild(img);
  document.body.appendChild(div);
} //1.5


var buttonDeleteLast = document.createElement('button');
buttonDeleteLast.textContent = 'Eliminar el último';

function eliminarFN() {
  var allDivsToRemove = document.querySelectorAll('div');
  allDivsToRemove[allDivsToRemove.length - 1].remove();
}

buttonDeleteLast.addEventListener('click', eliminarFN);
document.body.appendChild(buttonDeleteLast); //1.6

var allDivsToRemove2 = document.querySelectorAll('div');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = allDivsToRemove2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _div = _step.value;
    var button = document.createElement('button');
    button.textContent = 'Elimíname!';
    button.addEventListener('click', function (e) {
      return e.target.parentElement.remove();
    });

    _div.appendChild(button);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}