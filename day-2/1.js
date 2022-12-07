const fs = require('fs')


const data = fs.readFileSync("input.txt").toString()

function getScore(a, b){
    const opponent = a.charCodeAt(0) - "A".charCodeAt(0)
    const you = b.charCodeAt(0) - "X".charCodeAt(0)

    if(opponent === (you + 2) % 3) return 6 + you + 1
    else if (you === opponent) return 3 + you + 1
    else return 0 + you + 1
}

const score =  data.split("\n").map(game => getScore(...game.split(" "))).reduce((a, b) => a + b, 0)

console.log("Score:", score)