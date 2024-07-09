"use strict";

/*Usa un bucle forof para recorrer todos los destinos del array. */
var placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (var _i = 0, _placesToTravel = placesToTravel; _i < _placesToTravel.length; _i++) {
  var place = _placesToTravel[_i];
  console.log(place);
} //


var alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
};

for (var key in alien) {
  console.log("".concat(key, ": ").concat(alien[key]));
}