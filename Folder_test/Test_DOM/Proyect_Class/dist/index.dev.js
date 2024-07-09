"use strict";

var zapatillas = [{
  id: 1,
  nombre: 'Nike Air Blanco',
  precio: 79.99,
  img: './assets/NikeAirBlanca.png',
  estrellas: 4,
  modelo: 'Air',
  colores: ['black', 'white']
}, {
  id: 2,
  nombre: 'Nike Air Force 1 Black',
  precio: 89.99,
  img: './assets/NikeAirForce1.png',
  estrellas: 4,
  modelo: 'Air Force 1',
  colores: ['black']
}, {
  id: 3,
  nombre: 'Nike Air Force 1 White',
  precio: 99.99,
  img: './assets/NikeAirForce1Blancas.png',
  estrellas: 3,
  modelo: 'Air Force 1',
  colores: ['grey', 'white']
}, {
  id: 4,
  nombre: 'Nike Air Force 1 Pastel',
  precio: 69.99,
  img: './assets/NikeAirForce1Pastel.jpg',
  estrellas: 5,
  modelo: 'Air Force 1',
  colores: ['#ede5cf', '#c5cadc', '#f6f6f6', '#d0b8b7', '#e9eaef']
}, {
  id: 5,
  nombre: 'Nike Air Max Dawn',
  precio: 74.99,
  img: './assets/NikeAirMaxDawn.png',
  estrellas: 2,
  modelo: 'Air Max',
  colores: ['white']
}, {
  id: 6,
  nombre: 'Nike Air Max Furyosa',
  precio: 109.99,
  img: './assets/NikeAirMaxFuryosa.png',
  estrellas: 1,
  modelo: 'Air Max',
  colores: ['grey', 'purple', 'yellow']
}, {
  id: 7,
  nombre: 'Nike Air Max Pulse',
  precio: 64.99,
  img: './assets/NikeAirMaxPulse.png',
  estrellas: 2,
  modelo: 'Air Max',
  colores: ['grey', 'white']
}, {
  id: 8,
  nombre: 'Nike Air Vapor Max Blue',
  precio: 119.99,
  img: './assets/NikeAirVaporMax.png',
  estrellas: 4,
  modelo: 'Air Vapor Max',
  colores: ['blue']
}, {
  id: 9,
  nombre: 'Nike Amarillo',
  precio: 84.99,
  img: './assets/NikeAmarillo.png',
  estrellas: 4,
  modelo: 'Amarillo',
  colores: ['yellow']
}, {
  id: 10,
  nombre: 'Nike Court Legacy',
  precio: 94.99,
  img: './assets/NikeCourtLegacy.png',
  estrellas: 4,
  modelo: 'Court Legacy',
  colores: ['white']
}, {
  id: 11,
  nombre: 'Nike Dunk Low',
  precio: 75.99,
  img: './assets/NikeDunkLow.png',
  estrellas: 4,
  modelo: 'Dunk Low',
  colores: ['black', 'white']
}, {
  id: 12,
  nombre: 'Nike Kiger 9',
  precio: 109.99,
  img: './assets/NikeKiger9.png',
  estrellas: 1,
  modelo: 'Kiger',
  colores: ['brown']
}, {
  id: 13,
  nombre: 'Nike Motiva Premium',
  precio: 89.99,
  img: './assets/NikeMotivaPremium.png',
  estrellas: 3,
  modelo: 'Motiva Premium',
  colores: ['pink', 'white']
}];
var MODELOS = [];
var MODELO = '';
var ESTRELLAS = 0;

var filtrar = function filtrar() {
  var filtered = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = zapatillas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var zapa = _step.value;

      if (MODELO.includes(zapa.modelo) && ESTRELLAS <= zapa.estrellas) {
        filtered.push(zapa);
      }
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

  printZapas(filtered);
};

var fillModelos = function fillModelos(zapas) {
  MODELOS.splice(0);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = zapas[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var zapa = _step2.value;

      if (!MODELOS.includes(zapa.modelo)) {
        MODELOS.push(zapa.modelo);
      }
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
};

fillModelos(zapatillas);

var createSelectModel = function createSelectModel() {
  var divFiltros = document.querySelector('#filtros');
  var selectModel = document.createElement('select');
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = MODELOS[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var modelo = _step3.value;
      var option = document.createElement('option');
      option.value = modelo;
      option.textContent = modelo;
      selectModel.appendChild(option);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  divFiltros.appendChild(selectModel);
  selectModel.addEventListener('change', function (event) {
    MODELO = event.target.value;
    filtrar();
  });
};

var printZapas = function printZapas(zapas) {
  var divZapas = document.querySelector('#zapatillas');
  divZapas.innerHTML = '';
  var colorAnterior = '';
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = zapas[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var zapa = _step4.value;
      var divZapa = document.createElement('div');
      var divImg = document.createElement('div');
      var img = document.createElement('img');
      var nombre = document.createElement('h3');
      var precio = document.createElement('p');
      var divEstrellas = document.createElement('div');
      var divColores = document.createElement('div');

      for (var i = 1; i <= 5; i++) {
        var estrella = document.createElement('div');
        estrella.className = 'estrella';

        if (i <= zapa.estrellas) {
          estrella.classList.add('rellena');
        }

        divEstrellas.appendChild(estrella);
      }

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = zapa.colores[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var color = _step5.value;
          var colorHTML = document.createElement('div');
          colorHTML.className = 'color';
          colorHTML.style.backgroundColor = color;
          divColores.appendChild(colorHTML);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      divColores.className = 'colores';
      divZapa.className = 'flex-container';
      divImg.classList.add('imgContainer');
      divEstrellas.classList.add('estrellas', 'flex-container');
      img.src = zapa.img;
      nombre.textContent = zapa.nombre;
      precio.textContent = "".concat(zapa.precio, " \u20AC");
      var colorAleatorio = "var(--rtc-special-color-".concat(Math.floor(Math.random() * 7) + 1, ")");

      while (colorAleatorio === colorAnterior) {
        colorAleatorio = "var(--rtc-special-color-".concat(Math.floor(Math.random() * 7) + 1, ")");
      }

      colorAnterior = colorAleatorio;
      divImg.style.backgroundColor = colorAleatorio;
      divZapa.appendChild(divColores);
      divZapa.appendChild(divImg);
      divImg.appendChild(img);
      divZapa.appendChild(nombre);
      divZapa.appendChild(precio);
      divZapa.appendChild(divEstrellas);
      divZapas.appendChild(divZapa);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
};

printZapas(zapatillas);
createSelectModel();