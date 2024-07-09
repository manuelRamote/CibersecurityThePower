"use strict";

var emojis = ['😂', '😁', '😎', '😍', '😴', '🤐'];
var numbers = [32442, 234, 2, 34, 234, 23, 4, 23, 423, 4, 23, 4]; //! declaración

var printDivs = function printDivs(selectorPadre, array) {
  var div = document.querySelector(selectorPadre); // limpiar el contenedor

  div.innerHTML = "";
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;
      var p = document.createElement('p');
      p.textContent = element;
      p.addEventListener('click', function (e) {
        return e.target.remove();
      });
      div.appendChild(p);
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
}; //! ejecuciones


printDivs('.insert-num-here', numbers);
printDivs('.insert-emoji-here', emojis); // saber que ha escrito el usuario
// controlar cuando quiere enviar el usuario el nuevo dato
//! Primero - acceder a los elementos (input), (button)

var input = document.querySelector('input');
var button = document.querySelector('button');

var insertarDato = function insertarDato() {
  //! saber que ha escrito el usuario
  if (isNaN(parseInt(input.value)) === true) {
    // el código si el dato NO es un número
    console.log(input.value);
    emojis.push(input.value);
    printDivs('.insert-emoji-here', emojis);
  } else {
    // el código si el dato es un número
    numbers.push(parseInt(input.value));
    printDivs('.insert-num-here', numbers);
  }

  input.value = '';
}; //! controlar cuando quiere enviar el usuario el nuevo dato - "cuando haga click el botón"


button.onclick = insertarDato;