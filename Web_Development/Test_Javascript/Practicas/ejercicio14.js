/*Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.*/

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  const wordCounts = {}

  for (let i = 0; i < param.length; i++) {
    const word = param[i]
    if (wordCounts[word]) {
      wordCounts[word]++
    } else {
      wordCounts[word] = 1
    }
  }

  return wordCounts
}

console.log(repeatCounter(counterWords))
