let number;
for (number = 100; number <= 200; number++){

  // use set diagram to figure out the conditions
  if (number % 3 !== 0 && number % 4 !== 0) {
    console.log(number);
  }
  // run the more strick condition first
  else if (number % 3 === 0 && number % 4 === 0) {
    console.log('LoopyLighthouse');
  }
  
  else if (number % 3 === 0) {
    console.log('Loopy');
  }
  
  else if (number % 4 === 0) {
    console.log('Lighthouse');
  }
  
}