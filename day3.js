const fs = require("fs");

const input = fs.readFileSync("./data3.txt").toString().split("\r\n");
//Part 1
const partOne = (input) => {
  let gammaRate = "";
  let epsilonRate = "";
  for (let i = 0; i < input[0].length; i++) {
    let a = 0;
    let b = 0;
    for (const number of input) {
      number[i] === "1" ? a++ : b++;
    }
    a > b ? (gammaRate += "1") : (epsilonRate += "1");
    a < b ? (gammaRate += "0") : (epsilonRate += "0");
  }
  parsedGamma = parseInt(gammaRate, 2);
  parsedEpsilon = parseInt(epsilonRate, 2);
  console.log("Power Consumption: ",parsedGamma * parsedEpsilon);
};

const countBits = (inputArray) => {
  let count = {};

  for (const line of inputArray) {
    for (let i = 0; i < line.length; i++) {
      // if key for this i does not exist, create it
      if (!count[i]) {
        // count i is an array, index 0 is "ones", index 1 is "zeroes"
        count[i] = [0, 0];
      }
      // if the element at line[i] is 1, increase the "ones" count in the array
      if (line[i] === "1") {
        count[i][0]++;
        // if the element at line[i] is 0, increase the "zeroes" count in the array
      } else {
        count[i][1]++;
      }
    }
  }
  return count;
};

const getMinMaxValues = (inputArray) => {
  const countedBits = countBits(inputArray);

  const minValues = [];
  const maxValues = [];
  for (const counts of Object.values(countedBits)) {
    if (counts[0] > counts[1]) {
      maxValues.push("0");
      minValues.push("1");
    } else {
      maxValues.push("1");
      minValues.push("0");
    }
  }

  return {
    min: minValues,
    max: maxValues,
  };
};

// //Part 2
const partTwo = (input) => {
    let oxyArr = [...input];
    let co2Arr = [...input];

    let currentBit = 0;

    // get Oxygen Rating
    while (oxyArr.length > 1) {
        const { max } = getMinMaxValues(oxyArr)
        oxyArr = oxyArr.filter((number) => {
            return number[currentBit] === max[currentBit];
        })

        currentBit++
    }

    const oxygenRating = parseInt(oxyArr[0],2)

    currentBit = 0;

    // get CO2 Scrubber Rating
    while (co2Arr.length > 1) {
        const { min } = getMinMaxValues(co2Arr)
        co2Arr = co2Arr.filter((number) => {
            return number[currentBit] === min[currentBit];
        })

        currentBit++
    }

    const co2Rating = parseInt(co2Arr[0],2)

    console.log("Life Support Rating: ", oxygenRating * co2Rating)
}

partOne(input);
partTwo(input);
