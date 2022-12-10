const fs = require("fs");

// process.chdir('day-8')
const data = fs.readFileSync("./input.txt").toString();
const forrest = data.split("\n").map((line) => line.split(""));

function getTopTrees(i, j) {
  return Array(i)
    .fill(0)
    .map((_, index) => forrest[index][j])
    .reverse();
}

function getBottomTrees(i, j) {
  return Array(forrest.length - i - 1)
    .fill(0)
    .map((_, index) => forrest[index + i + 1][j]);
}

function getLeftTrees(i, j) {
  return Array(j)
    .fill(0)
    .map((_, index) => forrest[i][index])
    .reverse();
}

function getRightTrees(i, j) {
  return Array(forrest.length - j - 1)
    .fill(0)
    .map((_, index) => forrest[i][index + j + 1]);
}

console.log(
  Math.max(
    ...forrest
      .map((row, i) =>
        row.map((tree, j) =>
          [
            getTopTrees(i, j),
            getBottomTrees(i, j),
            getLeftTrees(i, j),
            getRightTrees(i, j),
          ]
            .map((blockingTrees) =>
              blockingTrees.findIndex((blockingTree) => blockingTree >= tree) >=
              0
                ? blockingTrees.findIndex(
                    (blockingTree) => blockingTree >= tree
                  ) + 1
                : blockingTrees.length
            )
            .reduce((a, b) => a * b, 1)
        )
      )
      .flat()
  )
);
