const fs = require("fs");

const input = fs.readFileSync("./data2.txt").toString().split("\r\n");
//Part 1
const partOne = (input) => {
  let x = 0;
  let y = 0;
  for (const direction of input) {
    const directionPairs = direction.split(" ");
    if (directionPairs[0] === "up") {
      x -= Number(directionPairs[1]);
    }
    if (directionPairs[0] === "down") {
      x += Number(directionPairs[1]);
    }
    if (directionPairs[0] === "forward") {
      y += Number(directionPairs[1]);
    }
  }
  console.log("Part One: ", x * y);
};

//Part 2
const partTwo = (input) => {
  let x = 0;
  let y = 0;
  let aim = 0;
  for (const direction of input) {
    const directionPairs = direction.split(" ");
    if (directionPairs[0] === "up") {
      aim -= Number(directionPairs[1]);
    }
    if (directionPairs[0] === "down") {
      aim += Number(directionPairs[1]);
    }
    if (directionPairs[0] === "forward") {
      y += Number(directionPairs[1]);
      x += aim * Number(directionPairs[1]);
    }
  }
  console.log("Part Two: ",x * y);
};

partOne(input);
partTwo(input);
