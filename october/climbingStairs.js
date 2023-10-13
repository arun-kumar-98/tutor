/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//   //base condition

//   if (n <= 1) return 1;

//   let prev = 1;
//   let current = 1;

//   for (let i = 2; i <= n; i++) {
//     let temp = current;
//     current = prev + current;
//     prev = temp;
//   }
//   return current;
// };

//using recursion top up approach
// var climbStairs = function (n) {
//   const dp = new Array(n + 1).fill(-1);
//   return solve(n, dp);
// };

// function solve(n, dp) {
//   if (n < 0) return 0;
//   if (dp[n] != -1) return dp[n];
//   if (n === 0) return 1;

//   //recursion

//   let one_step = solve(n - 1, dp);
//   let two_step = solve(n - 2, dp);
//   dp[n] = one_step + two_step;
//   return dp[n];
// }

// var climbStairs = function (n) {
//   if (n === 0 || n === 1 || n === 2) return n;

//   const dp = new Array(n + 1).fill(-1);

//   dp[0] = 0;
//   dp[1] = 1;
//   dp[2] = 2;

//   //ITERATE OVER N
//   for (let i = 3; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//     console.log(dp[i]);
//   }
//   return dp[n];
// };

//ONE MORE APPROCH
var climbStairs = function (n) {
  if (n === 1 || n === 2) return n;

  let a = 1,
    b = 2,
    c = 3;

  for (let i = 3; i <= n; i++) {
    c = b + a;
    console.log(c);

    let temp = b;
    b = c;
    a = temp;
  }
  return c;
};

console.log(climbStairs(4));
