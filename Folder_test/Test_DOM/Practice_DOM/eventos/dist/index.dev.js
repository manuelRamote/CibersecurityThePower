"use strict";

//! lo primero que necesito para darle funcionalidad al botón es el botón
var button = document.querySelector('button');

function darVuelta(e) {
  /* console.log(event.target.remove()); */
  e.target.style.transform = 'rotate(180deg)';
}
/* function addEventos () {
    const allP = document.querySelectorAll("p");
    allP[0].addEventListener("mouseover", (e) => darVuelta(e));
} */


var cantidadParrafos = 0;

function crearParrafo() {
  var p = document.createElement('p');
  cantidadParrafos++;
  p.textContent = 'Soy un párrafo nuevo';

  if (cantidadParrafos === 1) {
    p.addEventListener('mouseover', function (e) {
      return darVuelta(e);
    });
    /* p.addEventListener("mouseover", darVuelta); */
  }

  document.body.appendChild(p);
  /* addEventos(); */
}
/* button.onclick = () => crearParrafo("Soy un párrafo nuevo"); */

/* button.addEventListener("click", nombreFuncion);


function nombreFuncion () {
    crearParrafo("Soy un párrafo nuevo");
}


button.addEventListener("click", () => crearParrafo("Soy un párrafo nuevo")); */


button.addEventListener('click', crearParrafo); //! contras - cuando estamos usando programación orientada a objetos POO