const humidity = 79;

type oneThroughFive = 1 | 2 | 3 | 4 | 5;

let lowNumber: oneThroughFive = 5;

type Evens = 2 | 4 | 6 | 8;

let evenNumber: Evens = 2;

let evenOrLowNumber = 5 as Evens | oneThroughFive;

function coinFlip(): "heads" | "tails" {
  if (Math.random() > 0.5) return "heads";
  return "tails";
}

const success = [
  "success",
  { name: "John", email: "john@example.com" },
] as const;

const fail = ["error", new Error("something went wrong!")] as const;

function maybeGetUserInfo() {
  if (coinFlip() === "heads") {
    return success;
  } else {
    return fail;
  }
}

const outcome2 = maybeGetUserInfo();

// outcome2[1].

function printEven(even: Evens): void {}
function printLowNumber(lowNum: oneThroughFive): void {}
function printEvenNumberUnder5(num: 2 | 4): void {}
function printNumber(num: number): void {}

let x = 5 as Evens | oneThroughFive;

// let evensOrLowNumber: Evens | oneThroughFive;

// evenOrLowNumber = 4;
// evenOrLowNumber = 5;

// printEven(x);
// printLowNumber(x);
// printEvenNumberUnder5(x);
// printNumber(x);

let evenAndLowNumber: Evens & oneThroughFive;

// evenAndLowNumber = 4;
// evenAndLowNumber = 6;
// evenAndLowNumber = 3;

let y = 4 as Evens & oneThroughFive;

printEven(y);
printLowNumber(y);
printEvenNumberUnder5(y);
printNumber(y);
