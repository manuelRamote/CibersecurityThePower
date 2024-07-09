/* 1.1 Inserta dinamicamente en un html un div vacio con javascript.

1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript.

1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.

1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here
*/

//1.1
const div = document.createElement('div')
document.body.appendChild(div)

//1.2
const div2 = document.createElement('div')
const p = document.createElement('p')
p.textContent = 'Hola, soy un párrafo dinámico!'
div2.appendChild(p)
document.body.appendChild(div2)

//1.3
const div3 = document.createElement('div')
for (let i = 0; i <= 6; i++) {
  const p = document.createElement('p')
  p.textContent = `Párrafo ${i + 1}`
  div3.appendChild(p)
}
document.body.appendChild(div3)

//1.4
const dynamicP = document.createElement('p')
dynamicP.textContent = 'Soy dinámico!'
document.body.appendChild(dynamicP)

//1.5
const h2Element = document.querySelector('.fn-insert-here')
h2Element.textContent = 'Wubba Lubba dub dub'

//1.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
for (let i = 0; i < apps.length; i++) {
  const li = document.createElement('li')
  li.textContent = apps[i]
  ul.appendChild(li)
}
document.body.appendChild(ul)

//1.7
const elementsToRemove = document.querySelectorAll('.fn-remove-me')
for (let i = 0; i < elementsToRemove.length; i++) {
  elementsToRemove[i].remove()
}

//1.8
const div18 = document.querySelector('div')
const div181 = document.querySelector('div:nth-child(2)')
const pElement = document.createElement('p')
pElement.textContent = 'Voy en medio!'
div18.insertAdjacentElement('afterend', pElement)

//1.9
const divs = document.querySelectorAll('.fn-insert-here')
for (let i = 0; i < divs.length; i++) {
  const p = document.createElement('p')
  p.textContent = 'Voy dentro!'
  divs[i].appendChild(p)
}
