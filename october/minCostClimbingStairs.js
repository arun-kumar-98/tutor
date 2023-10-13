/**
 * @param {number[]} cost
 * @return {number}
 */

//USING DP BUTTOM UP APPROACH

// var minCostClimbingStairs = function (cost) {
//   const n = cost.length;
//   //create dp array

//   const dp = new Array(n);
//   //initialize dp

//   dp[0] = cost[0];
//   dp[1] = cost[1];
//   for (let i = 2; i < n; i++) {
//     //add cost to  mini
//     dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
//   }
//   return Math.min(dp[n - 1], dp[n - 2]);
// };

//without dp
// var minCostClimbingStairs = function (cost) {
//   const n = cost.length;

//   let first = cost[0];
//   let second = cost[1];

//   for (let i = 2; i < n; i++) {
//     let current = Math.min(first, second) + cost[i];
//     first = second;
//     second = current;
//   }

//   return Math.min(first, second);
// };

var minCostClimbingStairs = function (cost) {
  for (let i = cost.length - 3; ~i; i--) {
    cost[i] = cost[i] + Math.min(cost[i + 1], cost[i + 2]);
  }
  return Math.min(cost[0], cost[1]);
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
