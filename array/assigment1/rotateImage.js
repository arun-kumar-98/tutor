// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
// var rotate = function (matrix) {
//   let n = matrix.length;

//   for (let i = 0; i < n / 2; i++) {
//     for (let j = 0; j < n / 2; j++) {
//       //top left ==top right
//       let temp = matrix[n - 1 - j][i];
//       //buttom right== top right
//       matrix[n - 1 - j][i] = matrix[n - 1 - i][j];
//       //buttom right==top left
//       matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i];

//       //top right=top left
//       matrix[j][n - 1 - i] = matrix[i][j];

//       //top left ==temp
//       matrix[i][j] = temp;
//     }
//   }
//   return matrix;
// };

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(rotate(matrix));
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - 1 - j]; //middle element remains the same in the case of the first example.
      matrix[i][matrix.length - 1 - j] = temp;
    }
  }
  return matrix;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotate(matrix));
