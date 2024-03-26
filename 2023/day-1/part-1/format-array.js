const fs = require('fs')

const reader = fs.readFileSync('input.txt', 'utf8')
const lines = reader.split('\n')
const input = []

lines.forEach((line) => {
  input.push(line)
})

const output =
  'const input = ' +
  JSON.stringify(input, null, 2) +
  '\n\nmodule.exports = input'

const formatArray = fs.writeFileSync('input.js', output)
console.log('input.txt -> input.js')
