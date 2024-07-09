"use strict";

/**Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums.
*/
var albums = ['De Mysteriis Dom Sathanas', 'Reign of Blood', 'Ride the Lightning', 'Painkiller', 'Iron Fist'];
var ul = document.createElement('ul');

for (var _i = 0, _albums = albums; _i < _albums.length; _i++) {
  var album = _albums[_i];
  var li = document.createElement('li');
  li.textContent = album;
  ul.appendChild(li);
}

document.body.appendChild(ul);