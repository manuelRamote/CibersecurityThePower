//while
let i = 1

while (i <= 10) {
  i++
  console.log(i)
}

//do while
let i1 = 1
console.log('bucle do while')
do {
  i1++
  console.log(i1)
} while (i1 <= 10)

//for
let frutas = ['pomelo', 'pera', 'manzana', 'naranja', 'mandarina']

// sin bucles...
console.log(frutas[0]) // pomelo
console.log(frutas[1]) // pera
console.log(frutas[2]) // manzana
console.log(frutas[3]) // naranja
console.log(frutas[4]) // mandarina

// con bucle for...
// empezamos en 0;
// siempre y cuando la i sea menor que la longitud del array frutas seguimos
// sumamos 1 a la i en cada vuelta del bucle
console.log('Bucle for: ')
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]) // pomelo // pera // manzana // naranja // mandarina
}
//bucles anidados
let frutasLength = []
console.log('Bucle anidados')
for (let i = 0; i < frutas.length; i++) {
  let fruta = frutas[i]
  console.log('La fruta i es: ' + frutas[i])
  for (let j = 0; j <= fruta.length; j++) {
    console.log('La fruta j es: ' + frutas[j])
    frutasLength[i] = j
  }
}

console.log(frutasLength) // [6, 4, 7, 7, 9]
