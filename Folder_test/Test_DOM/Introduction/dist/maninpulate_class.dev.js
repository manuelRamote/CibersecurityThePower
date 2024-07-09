"use strict";

// Recuperamos  un elemento
var cabecera = document.getElementById('cabecera'); // Elimina una clase del elemento

cabecera.classList.remove('foo'); // Añade una clase si no existe

cabecera.classList.add('otra'); // Añade o elimina varias clases a la vez

cabecera.classList.add('foo', 'bar');
cabecera.classList.remove('foo', 'bar'); // Si la clase existe la elimina, si no existe, la crea

cabecera.classList.toggle('visible'); // Devuelve true si el elemento contiene esa clase

cabecera.classList.contains('foo');
/*DOM Templates podemos implementar o modificar elementos a través de strings, permitiéndonos crear estructuras HTML de manera dinámica y manipular el contenido de la página web de manera más flexible y sencilla.*/

var title = "<h1>Hello</h1>";
var name = 'Paquito';
var job = 'Frontend Developer'; // old school

console.log('my name is ' + name + ' and my job is ' + job); // new way

console.log("my name is ".concat(name, " and my job is ").concat(job)); // Add to HTML

var contentApp = document.querySelector('#nameSelector');
var html = "<ul>\n    <li>name: ".concat(name, "</li>\n    <li>job: ").concat(job, "</li>\n</ul>");
contentApp.innerHTML = html;