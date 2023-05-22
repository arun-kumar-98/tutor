/**
 *  richest wealth problem
 *
 * wealth=[[1,2,3],[3,2,1]]
 *
 *
 *
 * */

function richestWealthProblem(wealth) {
  let ans = 0;

  let e = 0;

  for (let i = 0; i < wealth.length; i++) {
    let sum2 = 0;

    for (let j = 0; j < wealth[i].length; j++) {
      sum2 = sum2 + wealth[i][j];
    }
    if (sum2 > e) e = sum2;
  }
  return e;

  // console.log(sum2);
}

//   for (let person = 0; person < accounts.length; person++) {
//     // sum the every person bank account

//     let rowsum = 0;

//     for (let account = 0; account < accounts[person].length; account++) {
//       rowsum += accounts[person][account];
//     }

//     if (rowsum > ans) {
//       ans = rowsum;
//     }
//   }
//   return ans;
// }

const resp = richestWealthProblem([
  [1, 2, 3],
  [2, 3, 9],
]);

//console.log(resp);

//ES6  SPREAD OPERATOR

const wealth = [
  [1, 2, 3],
  [2, 3, 9],
];
const result = Math.max(
  ...wealth.map((account) => account.reduce((a, b) => a + b, 0))
);

console.log(result);
//

// const result = Math.max(
//   [...wealth].map((account) => {
//     account.reduce((a, b) => a + b, 0);
//   })
// );

//console.log(result);

//OTHER SOLUTION
/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function (accounts) {
  // [[1,5],[7,3],[3,5]]
  let res = accounts.map((arr) => {
    let sum = 0;
    for (let elem of arr) {
      sum += elem;
    }
    return sum;
  });

  return Math.max(...res);
};
