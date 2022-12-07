const fs = require('fs')


const data = fs.readFileSync("input.txt").toString()

const calories = data.split("\n\n").map(data => data.split("\n").map(data => parseInt(data)).reduce((a, b) => a + b, 0))
const maxCalory = Math.max(...calories)

console.log("Max Calory:", maxCalory)