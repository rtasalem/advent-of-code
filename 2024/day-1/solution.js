import fs from 'fs'

const data = fs.readFileSync('./input.txt', 'utf8')
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

console.log('The solution to Day 1 Part 1 of AoC 2024 =', sum)