const fs = require("fs");

const data = fs.readFileSync("input.txt").toString();

function inRange(value, start, end) {
  return value >= start && value <= end;
}

const score = data
  .split("\n")
  .map((line) => line.split(","))
  .map((ranges) =>
    ranges.map((range) => range.split("-").map((v) => parseInt(v)))
  )
  .map(
    ([[firstStart, firstEnd], [secondStart, secondEnd]]) =>
      inRange(firstStart, secondStart, secondEnd) ||
      inRange(firstEnd, secondStart, secondEnd) ||
      inRange(secondStart, firstStart, firstEnd) ||
      inRange(secondEnd, firstStart, firstEnd)
  )
  .filter(Boolean).length;

console.log(score);
