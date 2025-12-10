import * as fs from "fs";

const rawInput = fs.readFileSync("./input.txt", { encoding: "utf-8" });

const input = rawInput.split("\n");

const testInput = [
  "987654321111111",
  "811111111111119",
  "234234234234278",
  "818181911112111",
];

function calc() {
  let sum = 0;

  for (const x of input) {
    const arr = x.split("");
    let first = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > first && i !== arr.length - 1) {
        first = arr[i];
        index = i;
      }
    }
    let second = arr[index + 1];
    for (let j = index + 1; j < arr.length; j++) {
      if (arr[j] > second) {
        second = arr[j];
      }
    }
    sum = sum + Number(`${first}${second}`);
  }
  return sum;
}

console.log(calc());
