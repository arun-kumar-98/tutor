/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function (rowIndex) {
//   if (rowIndex < 0) return 0;

//   const arr = [];
//   for (let i = 0; i <= rowIndex; i++) {
//     arr[i] = new Array().fill(i + 1);

//     //initialize

//     arr[i][0] = 1;
//     arr[i][i] = 1;

//     for (let j = 1; j < i; j++) {
//       arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
//     }
//   }

//   for (let k = 0; k < arr.length; k++) {
//     if (k == rowIndex) {
//       return arr[k];
//     }
//   }
//   return [];
// };

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function(rowIndex) {
//     if (rowIndex < 0) return 0;
//      const result = [];

//    for (let i = 0; i <= rowIndex; i++) {
//        result[i] = new Array().fill(i + 1);
//        result[i][0] = 1;
//        result[i][i] = 1;
//        for (let j = 1; j < i; j++) {
//        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
//        }
//    }
//    for (let k = 0; k < result.length; k++) {
//        if (k == rowIndex) {
//        return result[k];
//        }
//    }
//    return result;

// };

// const getRow = function (rowIndex) {
//   if (rowIndex < 0) return [];

//   const row = new Array(rowIndex + 1).fill(0);
//   row[0] = 1;

//   for (let i = 1; i <= rowIndex; i++) {
//     for (let j = i; j > 0; j--) {
//       row[j] += row[j - 1];
//     }
//   }

//   return row;
// };

const getRow = function (rowIndex) {
  if (rowIndex < 0) return [];

  // Create a 2D DP array filled with -1
  const dp = new Array(rowIndex + 1)
    .fill(-1)
    .map(() => new Array(rowIndex + 1).fill(-1));

  function solution(row, col) {
    if (row === col || col === 0) return 1; // The first and last elements of each row are always 1.

    if (dp[row][col] !== -1) {
      return dp[row][col];
    }

    const result = solution(row - 1, col - 1) + solution(row - 1, col);

    dp[row][col] = result;

    return result;
  }

  // Create an array to store resultant values
  const pascalTriangle = [];

  for (let col = 0; col <= rowIndex; col++) {
    pascalTriangle.push(solution(rowIndex, col));
  }

  return pascalTriangle;
};
console.log(getRow(2)); // Example: Calculate and print the 3rd row of Pascal's Triangle.
