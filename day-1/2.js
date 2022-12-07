const fs = require('fs')


const data = fs.readFileSync("input.txt").toString()

const calories = data.split("\n\n").map(data => data.split("\n").map(data => parseInt(data)).reduce((a, b) => a + b, 0))
const totalTopCalories = calories.sort().slice(-3).reduce((a, b) => a + b, 0)

console.log("Total Top Caloies:", totalTopCalories)