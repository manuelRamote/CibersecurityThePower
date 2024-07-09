"use strict";

// seleccionando el contenedor donde quiero volcar mis emojis
var emojiDiv = document.querySelector('.insert-emoji-here'); // recorro el array de emojis para ir accediendo a ellos de uno en uno

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = emojis[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var emoji = _step.value;
    // creamos el párrafo
    var pEmoji = document.createElement('p'); // le damos al párrafo el valor del emoji

    pEmoji.textContent = emoji; // metemos el emoji dentro del contenedor

    emojiDiv.appendChild(pEmoji);
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

var numDiv = document.querySelector('.insert-num-here');
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = numbers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var number = _step2.value;
    var pNumber = document.createElement('p');
    pNumber.textContent = number;
    numDiv.appendChild(pNumber);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}