"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

//! yo no puedo utilizar el bucle forin para hacer vueltas específicas sin tener un array, string u objeto de apoyo
//? en principio nosotros sólo podemos recorrer los tipos de datos iterables "array" y strings
//? no podemos recorrer un objeto
var user = {
  name: 'paquito',
  email: 'paquito@paquito.com',
  password: 'pqowieur',
  mascotas: true
};
/* console.log(Object.keys(user)); */

/* const array = ["name", "email", "password", "mascotas"]; */

for (var i = 0; i < Object.keys(user).length; _readOnlyError("i"), i++) {
  var key = Object.keys(user)[i];
  console.log("".concat(key, ": ").concat(user[key]));
} //* forin podríamos suponer o entender que entre muchas comillas """recorrer""" un objeto


for (var _key in user) {
  console.log("".concat(_key, ": ").concat(user[_key]));
}