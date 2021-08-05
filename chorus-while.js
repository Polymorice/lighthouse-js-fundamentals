// code example 1
// const chorus = "Let's dance!";
// let repeat = 0;
// while (repeat < 10) {
  //   console.log(chorus);
  //   // console.log(repeat);
  //   repeat++;
  // }
  // console.log("Until the sun comes up!");
  
  // code example 2
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(repeat);
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");