const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let avg = 0

  for (i = 0; i < param.length; i++) {
    avg = avg + param[i]
  }
  return avg / param.length
}

console.log(average(numbers))
