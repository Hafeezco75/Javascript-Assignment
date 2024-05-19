population = 312032486

daysInAYear = 365

totalTimeInAday = 60 * 60 * 24

let birthrate = 7

let deathrate = 13.0

let newImmigrant = 45.0

let totalSecondsInADay = 86400

let totalBirthInADay = totalSecondsInADay / birthrate

let totalDeathInADay = totalSecondsInADay / deathrate

let totalNewImmigrant = totalSecondsInADay / newImmigrant

let totalBirthInAYear = totalBirthInADay * daysInAYear

let totalDeathInAYear = totalDeathInADay * daysInAYear

let totalNewImmigrantInAYear = totalNewImmigrant * daysInAYear

let newPopulationIncrementInAYear = totalBirthInAYear + totalNewImmigrantInAYear - totalDeathInAYear

let newPopulationIncrementInFiveYears = newPopulationIncrementInAYear * 5

console.log(totalBirthInADay)

console.log(newPopulationIncrementInAYear)

console.log(newPopulationIncrementInFiveYears)










