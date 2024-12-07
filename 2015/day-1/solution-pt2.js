import fs from 'fs'
import { input, utf8 } from '../../constants/index.js'

const data = fs.readFileSync(input, utf8)
const brackets = input.split('')
console.log("🚀 ~ brackets:", brackets)

let floor = 0 
let position = 0

for (let i = 0; i < brackets.length; i++) {
  if (brackets[i] === '(') {
    floor++
  } else if (brackets[i] === ')') {
    floor--
  }

  if (floor === -1) {
    position = i + 1
    break
  }
}

console.log("🚀 ~ position:", position)