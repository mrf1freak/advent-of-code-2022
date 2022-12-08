const fs = require("fs");

const data = fs.readFileSync("input.txt").toString();
const lines = data.split("\n");

const root = {};
let cd = root;
let stack = [];

lines.forEach((line) => {
  const tokens = line.split(" ");

  switch (tokens[0]) {
    case "$":
      switch (tokens[1]) {
        case "cd":
          switch (tokens[2]) {
            case "/":
              cd = root;
              stack = [];
              break;

            case "..":
              cd = stack.pop();
              break;

            default:
              cd[tokens[2]] = {};
              stack.push(cd);
              cd = cd[tokens[2]];
              break;
          }
          break;

        default:
          break;
      }
      break;

    default:
      const size = parseInt(tokens[0]);
      if (!isNaN(size)) cd[tokens[1]] = size;
      else cd[tokens[1]] = {};
      break;
  }
});

const sizes = [];
function getDirSize(dir) {
  return Object.values(dir)
    .map((v) => {
      if (typeof v === "object") {
        const size = getDirSize(v);
        sizes.push(size);
        return size;
      } else {
        return v;
      }
    })
    .reduce((a, b) => a + b, 0);
}

sizes.push(getDirSize(root));

const answer = sizes
  .sort((a, b) => a - b)
  .find((size) => 70000000 - Math.max(...sizes) + size >= 30000000);

console.log(answer);
