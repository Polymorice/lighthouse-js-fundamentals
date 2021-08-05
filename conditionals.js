// code example 1
const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}
// no else statment, no outcome for 'false'

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

// code example 2
const temperature = 5;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
// logical operators
// && - logical AND
// || - logical OR
// ! - logical NOT.

// code example 3
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

// code example 4
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

// code example 5
if (!raining) {
  console.log("Leave your umbrella at home!");
}

