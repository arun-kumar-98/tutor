/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix;
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 1; i < m; i++) {
    matrix[i][0] += matrix[i - 1][0];
  }
  for (let j = 1; j < n; j++) {
    matrix[0][j] += matrix[0][j - 1];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] +=
        matrix[i - 1][j] + matrix[i][j - 1] - matrix[i - 1][j - 1];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let ans = this.matrix[row2][col2];
  if (row1 > 0) ans -= this.matrix[row1 - 1][col2];
  if (col1 > 0) ans -= this.matrix[row2][col1 - 1];
  if (row1 > 0 && col1 > 0) ans += this.matrix[row1 - 1][col1 - 1];
  return ans;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
