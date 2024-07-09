//Detectar la tecla presionada en un input de tipo text
const campoTexto = document.getElementById('miCampoTexto')

function handlePressedKey(event) {
  console.log('Tecla presionada: ' + event.key)
}

campoTexto.addEventListener('keydown', handlePressedKey)

//Controlar el campo seleccionado en un select
const select = document.getElementById('miSelect')

function handleSelect() {
  const seleccion = select.ariaValueMax
  console.log('Selección cambiada a: ' + seleccion)
}

select.addEventListener('change', handleSelect)

//Detectar el paso del mouse encima de un elemento
const elemento = document.getElementById('miElemento')

function handleMouseOver() {
  console.log('Mouse sobre el elemento')
}

elemento.addEventListener('mouseover', handleMouseOver)

//Cerrar un cuadro de diálogo modal al presionar Esc:
const modal = document.getElementById('miModal')

function closeModal(event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none'
  }
}

document.addEventListener('keydown', closeModal)
