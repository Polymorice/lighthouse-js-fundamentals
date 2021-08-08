// print "Bob" because the first value is non-empty and causes a short curcuit.
console.log("Bob" || " Marley");
// false, K>J
console.log("Jeremy" > "Khurram");
// pirnt on two lines
console.log("Don\nBurks");
// concatenation, result in a string
console.log(5 + "3");
// strict comparison
console.log("15" === 15);
// reassignment
let a = 3;
let b = 4;
b = a;
console.log(b);
// check even without function
const number = 2 + 2;
console.log(number % 2 === 0);
// function output false
const areMultiples = function (bigNumber, smallNumber) {
  return bigNumber % smallNumber === 0;
};

console.log(areMultiples(15, 4));
// array, print 2
const countdown = [3, 2, 1];
console.log(countdown[1]);
// heap memopry, 3 and 4
// seasons.length updates, not length
const seasons = ["spring", "summer", "fall"];
const length = seasons.length;

seasons.push("winter");

console.log(length);
console.log(seasons.length);
// unclear intervals of cases, code stops at if
const vacationDays = 2 + 3;

if (vacationDays <= 5) {
  console.log("Not enough for a long vacation.");
} else if (vacationDays === 5) {
  console.log("We can take a whole week off, not bad.");
} else {
  console.log("We're gonna have a great time!");
}
// function scope is not global scope
let sum = 3 + 2;

const doubleSum = function (a, b) {
  let sum = a + b;
  return sum * 2;
};

doubleSum(5, 4);

console.log(sum);
