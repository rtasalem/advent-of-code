import fs from 'fs'
import { input, utf8 } from '../../constants/index.js'

const data = fs.readFileSync(input, utf8)
const lines = data.trim().split('\n')

const leftLocationIds = []
const rightLocationIds = []

lines.forEach((line) => {
  const [left, right] = line.split(/\s+/).map(Number)
  leftLocationIds.push(left)
  rightLocationIds.push(right)
})

leftLocationIds.sort()
rightLocationIds.sort()

const difference = []

for(let i = 0; i < leftLocationIds.length; i++) {
  difference.push(Math.abs(leftLocationIds[i] - rightLocationIds[i]))
}

const sum = difference.reduce((acc, cur) => acc + cur, 0)
console.log('Solution to AoC 2024 Day 1, Part 1:\nThe total distance between the list of left and right location IDs =', sum)
