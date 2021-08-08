const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

function judgeVegetable(vegetables, metric) {
  let max = 0;
  let winner = "";
  for (let vegetable of vegetables) {
    if (vegetable[metric] > max) {
      max = vegetable[metric];
      winner = vegetable["submitter"];
    }
  }
  return winner;
}

// function judgeVegetable(vegetables, metric) {
//   let maxMetric = 0;
//   let winner = "";
//   for (let vegetable of vegetables) {
//     if (vegetable[metric] > maxMetric) {
//       maxMetric = vegetable[metric];
//       winner = vegetable["submitter"];
//     }
//     return winner;

//     console.log(vegetable["submitter"]);
//   }
// }

judgeVegetable(vegetables, metric);
