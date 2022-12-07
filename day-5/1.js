const fs = require("fs");

const data = fs.readFileSync("input.txt").toString();

const lines = data.split("\n");
const numberOfStacks = (lines[0].length + 1) / 4;
const blankLineIndex = lines.findIndex((line) => line === "");
const stackStartsFrom = blankLineIndex - 2;
const instructionsStartFrom = blankLineIndex + 1;

const stacks = Array(numberOfStacks)
  .fill(0)
  .map(() => []);
const instructions = lines
  .slice(instructionsStartFrom)
  .map((line) => line.split(" "))
  .map(([_, amount, __, from, ____, to]) =>
    [amount, from, to].map((val) => parseInt(val))
  );

lines
  .slice(0, stackStartsFrom + 1)
  .reverse()
  .forEach((line) => {
    for (let i = 0; i < numberOfStacks; i++) {
      const block = line[i * 4 + 1];
      if (block != " ") stacks[i].push(block);
    }
  });

instructions.forEach(([amount, from, to]) => {
  for (let i = 0; i < amount; i++) {
    stacks[to - 1].push(stacks[from - 1].pop());
  }
});

const message = stacks.map((stack) => stack.pop()).join("");
console.log(message);
