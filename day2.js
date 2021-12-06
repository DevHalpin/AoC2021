const fs = require('fs');

//Part 1
fs.readFile("./data2.txt", function (err, input) {
    let x = 0;
    let y = 0;
    if (err) console.log(err);
    const resultArr = input.toString().split("\r\n");
    for (const direction of resultArr) {
        const directionPairs =  direction.split(" ")
        if (directionPairs[0] === "up") {
            x -= Number(directionPairs[1])
        }
        if (directionPairs[0] === "down") {
            x += Number(directionPairs[1])
        }
        if (directionPairs[0] === "forward") {
            y += Number(directionPairs[1])
        }
    }
    return (x*y)
  });

  //Part 2
  fs.readFile("./data2.txt", function (err, input) {
    let x = 0;
    let y = 0;
    let aim = 0;
    if (err) console.log(err);
    const resultArr = input.toString().split("\r\n");
    for (const direction of resultArr) {
        const directionPairs =  direction.split(" ")
        if (directionPairs[0] === "up") {
            aim -= Number(directionPairs[1])
        }
        if (directionPairs[0] === "down") {
            aim += Number(directionPairs[1])
        }
        if (directionPairs[0] === "forward") {
            y += Number(directionPairs[1])
            x += aim * Number(directionPairs[1])
        }
    }
    console.log(x*y)
  });