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

const counts = {}

leftLocationIds.forEach((el) => {
  const countsInRight = rightLocationIds.filter(item => item === el).length
  counts[el] = countsInRight > 0 ? countsInRight : 0
})

const leftCounts = Object.values(counts)
const similarityScores = []

leftLocationIds.forEach((id, index) => {
  const score = id * leftCounts[index]
  similarityScores.push(score)
})

const totalSimilarityScore = similarityScores.reduce((acc, cur) => acc + cur, 0) 

console.log('Solution to AoC 2024 Day 1, Part 2 =', totalSimilarityScore)
