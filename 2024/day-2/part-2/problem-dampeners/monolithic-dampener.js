import { strictlyIncreasing, strictlyDecreasing } from '../utils/index.js'

export const monolithicDampener = (reports) => {
  const safeReports = []
  const unsafeReports = []

  reports.forEach((report) => {
    if (!strictlyIncreasing(report) || !strictlyDecreasing(report)) {
      for (let i = 0; i < report.length; i++) {
        const dampenedReport = report.splice(i, 1)
        if (strictlyIncreasing(dampenedReport) || strictlyDecreasing(dampenedReport)) {
          break
          safeReports.push(report)
        } else {
          unsafeReports.push(report)
        }
      }
    } else {
      safeReports.push(report)
    }
  })
}