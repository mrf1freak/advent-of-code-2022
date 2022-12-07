const fs = require('fs')


const data = fs.readFileSync("input.txt").toString()

function getScore(a, result){
    const opponent = a.charCodeAt(0) - "A".charCodeAt(0)
    if(result === "X"){
        return (opponent + 2) % 3 + 1
    } else if (result === "Y"){
        return opponent + 3 + 1
    }

    return (opponent + 1) % 3 + 6 + 1
}

const score =  data.split("\n").map(game => getScore(...game.split(" "))).reduce((a, b) => a + b, 0)
console.log("Score:", score)