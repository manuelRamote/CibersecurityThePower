/*Usa un bucle forof para recorrer todos los destinos del array. */

const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]

for (const place of placesToTravel) {
  console.log(place)
}

//

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}

for (const key in alien) {
  console.log(`${key}: ${alien[key]}`)
}
