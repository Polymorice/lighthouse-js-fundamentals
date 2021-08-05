// // tyoical example of calculating sum
// const amounts = [61.00, 52.25, 112.99, 5.00]; 
// const total = 0;
// // .length is better than counting the [total]
// for (let i = 0; i < amounts.length; i++) {
//   total += amounts[i];
// }
// console.log('Order total is: ', total);
// // when toggling comment, previously written comments will not be affected

// // for ... of loop example 1
// // for live and dynamic arrays, with less editting
// // index is irrelavent
// let total = 0;
// // node reports amounts is not irerable
// let amounts = [1];
// // amount is the element of amounts, can be named for anything
// for (let monkey of amounts) {
//   total += monkey;
// }
// console.log('Order total is: ', total);

// for ... of loop example 2
let word = 'abc';
for (let letter of word) {
  // if word is used in console.log abc will be printed 3 times
  console.log(letter);
}