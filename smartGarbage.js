// Compass lint bot reports weird indentation errors
const smartGarbage = function (trash, bins) {
  let waste;
  let recycling;
  let compost;
  switch (trash) {
    case "waste":
      bins["waste"]++;
      // Object.keys(bins[1]) + 1;
      break;
    case "recycling":
      bins["recycling"]++;
      // Object.keys(bins[1]) + 1;
      break;
    case "compost":
      bins["waste"]++;
      // Object.keys(bins[2]) + 1;
      break;
  }
  return bins;
};

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));

// {
//   waste: 4,
//   recycling: 3,
//   compost: 5
// }
