/**
 * pascal triangle:-
 *
 * sum of two above column form new row column
 *
 *   1
 *   1 1
 *   1 2 1
 *   1 3 3 1
 *   1 4 6 4 1

 */

function pascalTriangle(row) {
  if (row < 0) return 0;
  const result = [];

  //iterate for row1

  for (let i = 0; i < row; i++) {
    //form array  for row1
    result[i] = new Array().fill(i + 1);
    //assign every rows first and last column 1
    result[i][0] = 1;
    result[i][i] = 1;
    //iterate for every row to form new rows column

    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
  }
  return result;
}

console.log(pascalTriangle(5));
