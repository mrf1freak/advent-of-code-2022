const fs = require("fs");

const data = fs.readFileSync("input.txt").toString();
const distinctCharacters = 14;
const sol =
  Array.from(data)
    .slice(0, -3)
    .map((_, i, array) =>
      Array(distinctCharacters)
        .fill(0)
        .map((_, j) => array[i + j])
        .join("")
    )
    .map((word) => new Set(word))
    .map((set) => set.size)
    .findIndex((size) => size == distinctCharacters) + distinctCharacters;

console.log(sol);
