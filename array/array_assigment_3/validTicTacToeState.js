/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {
    let turns = 0;
    const rows = new Array(3).fill(0);
    const columns = new Array(3).fill(0);
    let diag = 0;
    let antiDiag = 0;
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i].charAt(j) === "X") {
          turns++;
          rows[i]++;
          columns[j]++;
          if (i === j) diag++;
          if (i + j === 2) antiDiag++;
        } else if (board[i].charAt(j) === "O") {
          turns--;
          rows[i]--;
          columns[j]--;
          if (i === j) diag--;
          if (i + j === 2) antiDiag--;
        }
      }
    }
  
    // Condition for X wins
    const xWins =
      rows[0] === 3 ||
      rows[1] === 3 ||
      rows[2] === 3 ||
      columns[0] === 3 ||
      columns[1] === 3 ||
      columns[2] === 3 ||
      diag === 3 ||
      antiDiag === 3;
  
    // Condition for O wins
    const oWins =
      rows[0] === -3 ||
      rows[1] === -3 ||
      rows[2] === -3 ||
      columns[0] === -3 ||
      columns[1] === -3 ||
      columns[2] === -3 ||
      diag === -3 ||
      antiDiag === -3;
  
    // Check conditions
    if ((xWins && turns !== 1) || (oWins && turns !== 0)) return false;
    if (xWins && oWins) return false;
    return turns === 0 || turns === 1;
  };
  
  // Test with the given board state
  console.log(validTicTacToe(["XO ", "XO ", "XO "]));
  