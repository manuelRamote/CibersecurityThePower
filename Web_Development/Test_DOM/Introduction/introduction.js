// Para crear elementos utilizamos el método createElement pasándole el nombre del tag
let nuevoH1 = document.createElement('h1')
let nuevoParrafo = document.createElement('p')

// Podemos crear nodos de texto para un elemento
let textoH1 = document.createTextNode('Hola mundo!')
let textoParrafo = document.createTextNode('lorem ipsum...')

// Podemos añadir un nodo como hijo a otro nodo ya existente
nuevoH1.appendChild(textoH1)
nuevoParrafo.appendChild(textoParrafo)

// También podemos asignar directamente el valor con las propiedades innerHTMl
nuevoH1.innerHTML = textoH1
nuevoParrafo.innerHTML = textoParrafo

// Los elementos estarían listos para añadirlos al DOM
// Ahora mismo sólo existen en memoria, pero no serán visibles hasta que no los añadamos a un elemento del DOM

// Seleccionamos un elemento
let cabecera = document.getElementById('cabecera')

// Le añadimos los nodos hijos
cabecera.appendChild(nuevoH1)
cabecera.appendChild(nuevoParrafo)

// Recuperamos el padre del elemento
let padre = cabecera.parentNode

// Insertamos el h1 antes de la cabecera
padre.insertBefore(nuevoH1, cabecera)

let box2 = document.getElementById('box2')
box2.insertAdjacentHTML('beforebegin', '<div><p>un párrafo nuevo.</p></div>')

// beforebegin - El nuevo HTML es insertado justo antes del elemento, a la misma altura (hermano);
// afterbegin - El nuevo HTML se inserta dentro del elemento, antes del primer hijo.
// beforeend - El nuevo HTML se inserta dentro del elemento, después del último hijo
// afterend - El nuevo HTML es insertado justo después del elemento, a la misma altura (hermano)
