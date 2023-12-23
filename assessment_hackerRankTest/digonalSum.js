function processData(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i][i];
  }

  console.log(result);
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

processData(matrix);
