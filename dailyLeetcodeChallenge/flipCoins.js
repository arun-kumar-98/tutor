/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
// var minFlips = function (a, b, c) {
//   let result = 0;

//   for (let i = 0; i < 32; i++) {
//     x = false;
//     y = false;
//     z = false;
//     //set true for x,y and z

//     if (a & (1 << i)) {
//       x = true;
//     }

//     if (b & (1 << i)) {
//       y = true;
//     }
//     if (c & (1 << i)) {
//       z = true;
//     }
//     //check if c=false
//     if (z == false) {
//       //then check x,y is true or false
//       if (x == true && y == true) {
//         result += 2;
//       } else {
//         if ((x = true || y == true)) {
//           result++;
//         }
//       }
//     } else {
//       if (x == false && y == false) result++;
//     }
//   }
//   return result;
// };

// let a = 2;
// let b = 6;
// let c = 5;

// console.log(minFlips(a, b, c));

let a = 1;
let b = 2;
let c = 3;

// var minFlips = function (a, b, c) {
//   let result = 0;
//   let curr = a | b;
//   for (let i = 1; i <= (c | a | b); i <<= 1) {
//     if (i & c) {
//       if ((i & curr) == 0) result++;
//     } else {
//       if (i & a) result++;
//       if (i & b) result++;
//     }
//   }
//   return result;
// };

// console.log(minFlips(a, b, c));

function pascalTriangle(rowIndex) {
  if (rowIndex < 0) return 0;
  const result = [];

  //iterate for row1

  for (let i = 0; i <= rowIndex; i++) {
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
  for (let k = 0; k < result.length; k++) {
    if (k == rowIndex) {
      return result[k];
    }
  }
  return result;
}

console.log(pascalTriangle(5));
