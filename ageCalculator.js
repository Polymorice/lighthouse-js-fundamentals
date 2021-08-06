function ageCalculator(name, yearB, yearC) {
  // let name;
  // let yearB;
  // let yearC;
  return name + "is " + (yearC - yearB) + " years old.";
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

// test
// function printf(a, b, c) {
//   return a + ", " + b + ", " + c;
// }

// console.log(printf("1", "2", "9"));

// my code could not pass lint bot again (might be due to Prettier)
// the following is copied from a repo
// function ageCalculator(name, yearOfBirth, currentYear){
//   return (name + " is " + (currentYear - yearOfBirth) + " years old.");
// }
