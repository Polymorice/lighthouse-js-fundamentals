const moves = ["north", "north", "west", "west", "north", "east", "north"];
const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];
    switch (move) {
      case "north":
        y = y + 1;
        break;
      case "south":
        y = y - 1;
        break;
      case "west":
        x = x - 1;
        break;
      case "east":
        x = x + 1;
        break;
    }
  }
  // console.log(x);
  // console.log(y);
  let coordinate = [x, y];
  return coordinate;
};
console.log(finalPosition(moves));

// following are copied from a repo
// met the lint bot test in Compass
// although my own code is longer, but it more readable for beginners
// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

// const finalPosition = function(moves) {
//   let startPoint = [0, 0]
//   let endPoint = []

//   // for (const move of moves) {
//   for (let i = 0; i < moves.length; i++) {

//     let change = moves[i];

//     if (change === 'north') {
//       startPoint[1] += 1
//     }
//     if (change === 'south') {
//       startPoint[1] -= 1
//     }
//     if (change === 'east') {
//       startPoint[0] += 1
//     }
//     if (change === 'west') {
//       startPoint[0] -= 1
//     }
//   }
//   endPoint = startPoint;
//   return startPoint;
// }

// console.log(finalPosition(moves));
