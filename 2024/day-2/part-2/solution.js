import fs from 'fs'
import { utf8 } from '../../../constants/index.js'
import { isAlwaysDecreasing, isAlwaysIncreasing } from '../utils/index.js'

const data = fs.readFileSync('../input.txt', utf8)
const lines = data.split('\n')

const reports = []

lines.forEach((line) => {
  reports.push(line.split(/\s+/).map(Number))
})

const monotonicReports = []
const unsafeReports = []

reports.forEach((report) => {
  if (isAlwaysIncreasing(report) || isAlwaysDecreasing(report)) {
    monotonicReports.push(report)
  } else {
    unsafeReports.push(report)
  }
})

const safeReports = []

for (const monotonicReport of monotonicReports) {
  let isSafe = true

  for (let i = 1; i < monotonicReport.length; i++) {
    const difference = Math.abs(monotonicReport[i] - monotonicReport[i - 1])
    if (difference < 1 || difference > 3) {
      isSafe = false
      break
    }
  }

  if (isSafe) {
    safeReports.push(monotonicReport)
  } else {
    unsafeReports.push(monotonicReport)
  }
}

console.log('Solution to AoC 2024 Day 1, Part 1:\nThe total number of safe reports =', safeReports.length)
console.log('Number of unsafe reports:', unsafeReports.length)

for (const unsafeReport of unsafeReports) {
  if (!isAlwaysIncreasing(unsafeReport) || !isAlwaysDecreasing(unsafeReport)) {
    for (let i = 0; i < unsafeReport.length; i++) {
      unsafeReport.splice(i, 1)
    }
  }
}