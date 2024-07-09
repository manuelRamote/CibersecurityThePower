"use strict";

/*Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.*/
var duplicates = ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'pizza', 'chicken', 'onion rings', 'pasta', 'soda'];

function removeDuplicates(param) {
  for (var i = 0; i < param.length; i++) {
    var primerPuntero = param[i];

    for (var j = i + 1; j < param.length; j++) {
      var segundoPuntero = param[j];

      if (primerPuntero === segundoPuntero) {
        // método splice para eliminar uno
        param.splice(j, 1); // damos un pasito atrás para no saltarnos ninguna comprobación

        j--;
      }
    }
  }

  console.log(param);
}

removeDuplicates(duplicates);