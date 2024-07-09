"use strict";

//! yo no puedo utilizar el bucle forof para hacer vueltas específicas sin tener un array o string de apoyo
var emojis = ['🎅', '🤶', '👼', '🕵️‍♂️', '👷‍♀️', '👩‍🌾']; // 6
// posiciones     0     1      2     3     4      5

for (var i = emojis.length / 2; i < emojis.length; i++) {
  var emoji = emojis[i];
  console.log(emoji);
}

console.log('--------------------------'); //! recorrer arrays o strings

for (var _i = 0, _emojis = emojis; _i < _emojis.length; _i++) {
  var _emoji = _emojis[_i];
  console.log(_emoji);
}