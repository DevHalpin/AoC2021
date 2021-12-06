const fs = require("fs");

const input = fs.readFileSync("./data1.txt").toString().split("\r\n");

//Part 1

const partOne = (input) => {
  const resultArr = input.toString().split("\n");
  let count = 0;
  for (i = 1; i < resultArr.length; i++) {
    if (Number(resultArr[i]) > Number(resultArr[i - 1])) {
      count++;
    }
  }
  console.log("Part One: ",count);
};

//Part 2

const partTwo = () => {
  const resultArr = input.toString().split("\n");
  let count = 0;
  let previousMeasure = 999999999;
  for (i = 0; i < resultArr.length; i++) {
    const threeMeasure =
      Number(resultArr[i]) +
      Number(resultArr[i + 1]) +
      Number(resultArr[i + 2]);

    if (threeMeasure > previousMeasure) {
      count++;
    }
    previousMeasure = threeMeasure;
  }
  console.log("Part Two: ",count);
};

partOne(input);
partTwo(input);
