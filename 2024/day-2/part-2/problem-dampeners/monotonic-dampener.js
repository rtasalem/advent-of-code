import { strictlyIncreasing, strictlyDecreasing } from '../utils/index.js'

export const monotonicDampener = (reports) => {
  const safeReports = []
  const unsafeReports = []

  for (const report of reports) {
    let isSafe = true

    for (let i = 0; i < report.length; i++) {
      report.splice(i, 1)
      if (!strictlyDecreasing(report) || !strictlyDecreasing(report)) {
        isSafe = false
        unsafeReports(report.push)
      } else {
        isSafe
        break
        safeReports.push(repor)
      }
    }
  }
}