/**
 * @param {number} n
 * @return {number}
 */
// var integerBreak = function (n) {
//   const dp = new Array(n + 1).fill(-1);

//   return solve(n, dp);
// };

// function solve(n, dp) {
//   if (n == 1) return 1;

//   if (dp[n] !== -1) return dp[n];

//   let result = Number.MIN_SAFE_INTEGER;

//   for (let i = 1; i <= n - 1; i++) {
//     let product = i * Math.max(n - i, solve(n - i, dp));
//     result = Math.max(result, product);
//   }
//   return (dp[n] = result);
// }

//console.log(integerBreak(10));

//without reucrsion button up approach

var integerBreak = function (n) {
  //declare 1-D DP

  const dp = new Array(n + 1).fill(0);
  //handle base case

  dp[1] = 1;

  //iterate from 2 bcoz product of 1 will remaining same

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = Math.max(dp[i], j * Math.max(i - j, dp[i - j]));
    }
  }
  return dp[n];
};

console.log(integerBreak(10));
