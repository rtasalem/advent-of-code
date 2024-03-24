const input = require('./input')

let total = 0

for (let line of input) {
  const numbers = line.split('').filter((element) => !isNaN(parseInt(element)))
  total += parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`)
}

console.log(total)
