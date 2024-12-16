import fs from 'fs'
import { utf8 } from '../../../constants/index.js'
import { monolithicDampener } from './problem-dampeners/index.js'

const data = fs.readFileSync('../input.txt', utf8)
const lines = data.split('\n')

const reports = []

lines.forEach((line) => {
  reports.push(line.split(/\s+/).map(Number))
})

monolithicDampener(reports)


