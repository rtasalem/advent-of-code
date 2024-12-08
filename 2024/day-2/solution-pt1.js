import fs from 'fs'
import { input, utf8 } from '../../constants/index.js'

const data = fs.readFileSync(input, utf8)
const lines = data.trim().split('\n')
console.log("🚀 ~ lines:", lines)

const levels = []

lines.forEach((line) => {
  levels.push(line.split(/\s+/))
})

