let firstName = 'Manuel'
let num = 25
let comida = ['Pan', 'Agua', 'Patata']
let objeto = {
  color: 'marron',
  precio: 250,
  material: {
    name: 'cuero',
    color: 'marron',
    price: 68
  }
}
let nodefinido = undefined
let nulo = null
let boolean = false

let elementos = [1, 'Manzana', true, { color: 'azul' }, 9.34]

let frutas = ['pomelo', 'pera', 'manzana', 'naranja', 'mandarina']
// posiciones:    0        1        2          3           4

console.log(frutas[0]) // pomelo

console.log(frutas[4]) // mandarina

console.log(objeto)

console.log(objeto.color) // marron

console.log(objeto['color']) // marron

///////

let myFun = new Function('5 + 2')
let shape = 'round'
let size = 1
let food = ['Apple', 'Mango', 'Orange']
let today = new Date()

typeof myFun // "function"
typeof shape // "string"
typeof size // "number"
typeof food // "object"
typeof today // "object"
typeof doesntExist // "undefined"

typeof true // "boolean"
typeof null // "object"
