function suma(a, b) {
  return a + b
}

let resultado = suma(3, 4) // 7

function pokemonAttack() {
  console.log('¡Pikachu impact Trueno!')
}

function pokemonAttackParams(name, attack) {
  console.log(`¡${name} ${attack}!`)
}
pokemonAttack() // ¡Pikachu impact Trueno!

pokemonAttackParams('Charmander', 'Ascuas') // ¡Charmander Ascuas!

pokemonAttackParams('Squirtel', 'Pistola de agua') // ¡Squirtel Pistola de agua!

//console.log(pokemonAttackParams('Bulbasaur')) // ¡Bulbasaur undefined!

function pokemonAttackParams2(name, attack = 'Ataque arena') {
  console.log(`¡${name} ${attack}!`)
}

console.log(pokemonAttackParams2('Onix')) // ¡Onix Ataque arena!

function suma2(numA, numB) {
  return numA + numB
}

let result = suma2(5, 20)

console.log(result) // 25

function showMovie(age) {
  if (age <= 18) {
    return
  }

  console.log('Mostrándote la película')
}

function showPokemon(name) {
  if (name === undefined) {
    name = 'Magikarp'
  }

  console.log(name) // Magikarp
}

showPokemon()

function showPokemon2(name) {
  // si name es undefined o false, la estable a "Magikarp"
  name = name || 'Magikarp'
  console.log(name) // Magikarp
}

showPokemon2()

// function showCount(count) {
//   // si count es undefined o null, muestra "unknown"
//   console.log(count ?? 'unknown')
// }

// showCount(0) // 0
// showCount(null) // unknown
// showCount() // unknown

//Arrow functions

const getName = () => {
  console.log('Devolviendo nombre')
  return 'Carlos'
}

const name = getName()

console.log(name)

// Ejemplo inline (omitiendo el return)
const getSurname = () => 'Martín'

const surname = getSurname()

console.log(surname)

const multiTwo = (x) => x * 2

const result1 = multiTwo(3)

console.log(result1) //6

const multi = (a, b) => a * b

const multiplicacion = multi(2, 2)

console.log(multiplicacion) //4

// b siempre que no pasemos segundo argumento será 3

const multiDefault = (a, b = 3) => a * b

const operacion = multiDefault(2)

console.log(operacion) //6

//recursividad
const calcularFactorial = (n) => {
  // Caso base: Si n es igual a 0, el factorial es 1.
  if (n === 0) {
    return 1
  }
  // Caso recursivo: Llamamos a la función con un valor más pequeño y multiplicamos por n.
  else {
    return n * calcularFactorial(n - 1)
  }
}

// Ejemplo de uso:
const numero = 5
const factorial = calcularFactorial(numero)
console.log(`El factorial de ${numero} es ${factorial}`)
