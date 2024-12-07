import fs from 'fs'
import { input, utf8 } from '../../constants/index.js'

const reader = fs.readFileSync(input, utf8)
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

