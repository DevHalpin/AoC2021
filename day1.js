const fs = require("fs");

//Part 1

fs.readFile("./data.txt", function (err, input) {
  if (err) console.log(err);
  const resultArr = input.toString().split("\n");
  let count = 0;
  for (i = 1; i < resultArr.length; i++) {
    if (Number(resultArr[i]) > Number(resultArr[i - 1])) {
      count++;
    }
  }
  console.log(count);
});

//Part 2

fs.readFile("./data.txt", function (err, input) {
  if (err) console.log(err);
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
  console.log(count);
});
