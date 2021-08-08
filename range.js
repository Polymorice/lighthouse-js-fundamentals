function range(start, end, step) {
  let numbers = [];
  if (start === undefined || end === undefined || step === undefined) {
    return numbers;
  } else if (start > end || step <= 0) {
    return numbers;
  } else {
    let i = start;
    while (i <= end) {
      numbers.push(i);
      i = i + step;
    }
    return numbers;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
