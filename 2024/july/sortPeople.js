/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
// var sortPeople = function (names, heights) {
//   const map = new Map();

//   //   const ans = [];
//   for (let i = 0; i < names.length; i++) {
//     // map[names[i]] = heights[i];

//     map.set(names[i], heights[i]);
//   }

//   // convert into into an key-value pairs arrau

//   const maparr = Array.from(map);
//   // sort in descending order

//   maparr.sort((a, b) => b[1] - a[1]);
//   console.log("* ", maparr);
//   let ans = maparr.map((pair) => pair[0]);

//   console.log("^^^ ", ans);
// };

var sortPeople = function (names, heights) {
  const people = [];

  for (let i = 0; i < names.length; i++) {
    people.push({ name: names[i], height: heights[i] });
  }
  //sort based on the height

  people.sort((a, b) => b.height - a.height);
  let ans = people.map((a) => a.name);
  console.log("ans ",ans);
};

// let names = ["Mary", "John", "Emma"],
//   heights = [180, 165, 170];

let names = ["Alice", "Bob", "Bob"],
  heights = [155, 185, 150];
sortPeople(names, heights);
