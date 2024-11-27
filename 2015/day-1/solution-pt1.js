import fs from 'fs'

const reader = fs.readFileSync('./input-pt1.txt', 'utf8')
const brackets = reader.split('')
console.log("🚀 ~ brackets:", brackets)

let floor = 0

for (const bracket of brackets) {
  if (bracket === '(') {
    floor++
  } else if (bracket === ')') {
    floor--
  }
} 

console.log("🚀 ~ floor:", floor)

