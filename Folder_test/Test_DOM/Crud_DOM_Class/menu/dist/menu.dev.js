"use strict";

document.querySelector('h1').addEventListener('click', function () {
  return document.querySelector('ul').classList.toggle('closed');
});