import fs from 'fs'
import { input, utf8 } from '../../constants/index.js'

const corruptedData = fs.readFileSync(input, utf8).toString()
const regex = /mul\((\d{3}),(\d{3})\)$/g

const uncorruptedData = [...corruptedData.matchAll(regex)]
console.log('🪵 | uncorruptedData:', uncorruptedData)
