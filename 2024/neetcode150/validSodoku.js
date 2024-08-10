/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //1. validate rows
  for (let row = 0; row < 9; row++) {
    const set = new Set();
    for (let col = 0; col < 9; col++) {
      // if '.' then it's empty cell
      // we need to ignore this cell
      if (board[row][col] === ".") continue;

      if (set.has(board[row][col])) {
        return false;
      }
      // add this row and column in the set
      set.add(board[row][col]);
    }
  }

  //2.validate columns

  for (let col = 0; col < 9; col++) {
    const set = new Set();
    for (let row = 0; row < 9; row++) {
      // if '.' then it's empty cell
      // we need to ignore this cell

      if (board[row][col] === ".") continue;

      if (set.has(board[row][col])) {
        return false;
      }
      // add this row and column in the set
      set.add(board[row][col]);
    }
  }

  //3. valid the 3x3 boxes

  for (let sr = 0; sr < 9; sr += 3) {
    let er = sr + 3;

    for (let sc = 0; sc < 9; sc += 3) {
      let ec = sc + 3;

      // call helper function validate
      if (!validBox(board, sr, er, sc, ec)) {
        return false;
      }
    }
  }
  return true;
};

// implementation of box
// it is like simple 2-d matrix traversal
function validBox(board, sr, er, sc, ec) {
  const set = new Set();

  for (let i = sr; i < er; i++) {
    for (let j = sc; j < ec; j++) {
      if (board[i][j] === ".") continue;

      if (set.has(board[i][j])) {
        return false;
      }
      set.add(board[i][j]);
    }
  }
  return true;
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

let ok = isValidSudoku(board);

console.log("** ok ** ", ok);

const board1 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

yes = isValidSudoku(board1);
console.log("** yes ** ", yes);

const grid = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];


let gristyes=isValidSudoku(grid)

console.log("  gridyes ",gristyes);