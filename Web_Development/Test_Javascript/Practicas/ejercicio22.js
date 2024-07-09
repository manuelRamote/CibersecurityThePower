/*Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.*/

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]
const updatedFoodSchedule = []
const usedFruits = new Set()

for (let i = 0; i < foodSchedule.length; i++) {
  const food = foodSchedule[i]
  if (!food.isVegan) {
    for (let j = 0; j < fruits.length; j++) {
      if (!usedFruits.has(fruits[j])) {
        updatedFoodSchedule.push(fruits[j])
        usedFruits.add(fruits[j])
        break
      }
    }
  } else {
    updatedFoodSchedule.push(food.name)
  }
}
console.log(updatedFoodSchedule)
