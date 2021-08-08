function concat(array1, array2) {
  // 1 array concat method
  // let array = array1.concat(array2);
  // 2 array iteration method
  let array = [];
  for (let element1 of array1) {
    array.push(element1);
  }
  for (let element2 of array2) {
    array.push(element2);
  }
  return array;
  console.log(array);
}

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);
