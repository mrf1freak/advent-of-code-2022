const fs = require("fs");

const data = fs.readFileSync("input.txt").toString();

const scores = data
  .split("\n")
  .map((line) => [
    new Set(line.substring(0, line.length / 2)),
    new Set(line.substring(line.length / 2)),
  ]).map(([firstHalf, secondHalf]) => Array.from(firstHalf)
  .filter((char) => secondHalf.has(char))
  .map((char) => {
    if (char === char.toUpperCase())
      return char.charCodeAt(0) - "A".charCodeAt(0) + 27;
    return char.charCodeAt(0) - "a".charCodeAt(0) + 1;
  })
  .reduce((a, b) => a + b, 0))
  .reduce((a, b) => a + b, 0);

console.log(scores);
