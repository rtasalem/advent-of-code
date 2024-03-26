const { count } = require('console')
const fs = require('fs')
const games = fs.readFileSync('input.txt', 'utf8').split('\n')

for (const game of games) {
  let totalPossibleGames = 0
  const [gameId, gameSets] = game.split(': ')
  for (const set of gameSets) {
    const gameData = set.split('; ')
    for (const data of gameData) {
      const cubeRecords = data.split(', ')
      for (const cubeData of cubeRecords) {
        const [cubeCount, cubeColour] = cubeData.split(' ')
        const cubeLimits = {
          red: 12,
          green: 13,
          blue: 14
        }
        if (
          cubeLimits[cubeColour] &&
          parseInt(cubeCount.split(' ')[1]) <= cubeLimits[cubeColour]
        ) {
          totalPossibleGames += parseInt(gameId.split(' ')[1])
        }
        return console.log(
          `Total number of possible games = ${totalPossibleGames}`
        )
      }
    }
  }
}
