"use strict";

var avengers = ['Hulk', 'Thor', 'IronMan', 'Captain Ame', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
  var longWord = '';

  for (var i = 0; i < param.length; i++) {
    if (param[i].length > longWord.length) {
      longWord = param[i];
    }
  }

  return longWord;
}

console.log(findLongestWord(avengers));