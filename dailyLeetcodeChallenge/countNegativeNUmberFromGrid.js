/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] < 0) {
        count++;
      }
    }
  }
  return count;
};

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
// console.log(countNegatives(grid));

var countNegatives = function (grid) {
  let count = 0;

  let row = 0;
  let column = grid.length - 1;

  while (row < grid.length && column >= 0) {
    if (grid[row][column] < 0) {
      console.log("______________", count);
      console.log("******* ", row);
      console.log("grid length ", grid.length);
      count += grid.length - row;
      console.log("----------------", count);
      column -= 1;
    } else row += 1;
  }
  return count;
};

console.log(countNegatives(grid));

const grid1 = [
  [3, 2],
  [1, 0],
];

//console.log(countNegatives(grid1));

const grid2 = [
  [5, 1, 0],
  [-5, -5, -5],
];

console.log(countNegatives(grid2));
