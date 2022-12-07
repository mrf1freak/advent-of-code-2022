const fs = require("fs");
const _ = require("lodash");

const data = fs.readFileSync("input.txt").toString();

const scores = _.chunk(data.split("\n"), 3)
  .map(([first, second, third]) => [
    new Set(first),
    new Set(second),
    new Set(third),
  ])
  .map(([firstHalf, secondHalf, thirdHalf]) =>
    Array.from(firstHalf)
      .filter((char) => secondHalf.has(char) && thirdHalf.has(char))
      .map((char) => {
        if (char === char.toUpperCase())
          return char.charCodeAt(0) - "A".charCodeAt(0) + 27;
        return char.charCodeAt(0) - "a".charCodeAt(0) + 1;
      })
      .reduce((a, b) => a + b, 0)
  )
  .reduce((a, b) => a + b, 0);

console.log(scores);
