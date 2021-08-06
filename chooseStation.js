const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

// function expression
const chooseStations = function (stations) {
  let goodStation = [];
  for (let i = 0; i < stations.length; i++) {
    // take the variable-naming solution from a repo
    // quite elegant way to deal with messy array
    let candidate = stations[i];
    let [building, capacity, type] = candidate;

    if (capacity >= 20 && (type === "school" || type === "community centre")) {
      goodStation.push(building);
    }
  }
  return goodStation;
};

console.log(chooseStations(stations));
