const fs = require("fs");

const data = fs.readFileSync("./input.txt").toString();
const forrest = data.split("\n").map((line) => line.split(""));

function getTopTrees(i, j) {
  return Array(i)
    .fill(0)
    .map((_, index) => forrest[index][j]);
}

function getBottomTrees(i, j) {
  return Array(forrest.length - i - 1)
    .fill(0)
    .map((_, index) => forrest[index + i + 1][j]);
}

function getLeftTrees(i, j) {
  return Array(j)
    .fill(0)
    .map((_, index) => forrest[i][index]);
}

function getRightTrees(i, j) {
  return Array(forrest.length - j - 1)
    .fill(0)
    .map((_, index) => forrest[i][index + j + 1]);
}

console.log(
  forrest
    .map((row, i) =>
      row.map(
        (tree, j) =>
          getTopTrees(i, j).every((blockingTree) => blockingTree < tree) ||
          getBottomTrees(i, j).every((blockingTree) => blockingTree < tree) ||
          getLeftTrees(i, j).every((blockingTree) => blockingTree < tree) ||
          getRightTrees(i, j).every((blockingTree) => blockingTree < tree)
      )
    )
    .flat()
    .filter(Boolean).length
);