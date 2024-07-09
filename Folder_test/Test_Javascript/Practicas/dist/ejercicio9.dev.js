"use strict";

var numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  var sum = 0;

  for (var i = 0; i < param.length; i++) {
    sum = sum + param[i];
  }

  return sum;
}

console.log(sumAll(numbers));