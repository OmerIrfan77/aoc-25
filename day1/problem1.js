import * as fs from "fs";

const rawInput = fs.readFileSync("./input.txt", { encoding: "utf-8" });

const input = rawInput.split("\n");

const input2 = [
  "L68",
  "L30",
  "R48",
  "L5",
  "R60",
  "L55",
  "L1",
  "L99",
  "R14",
  "L82",
];

function calc(startPos) {
  let count = 0;
  let val = Number(startPos);
  for (let x = 0; x < input.length; x++) {
    let i = input[x];
    // console.log(i);
    let num = Number(i.slice(1));
    console.log(i, num);
    num = num > 99 ? num % 100 : num;
    // if (num > 99) {
    //   num = num % 100;
    //   count = count + Number(num.toString().charAt(0));
    // }
    if (i.charAt(0) === "L") {
      val = val - num;
    } else {
      val = val + num;
    }

    if (val > 99) {
      val = val - 100;
    } else if (val < 0) {
      val = 100 + val;
    }
    console.log(val);

    if (val === 0) {
      count++;
    }
  }
  return count;
}

console.log(calc(50));
