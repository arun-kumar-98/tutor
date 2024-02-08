//Buttom up approach
var numSquare = function (n) {
  const dp = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = i; // Initialize to the worst case, where each number is represented by 'i' 1's.

    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], 1 + dp[i - j * j]);
    }
  }
  return dp[n];
};

console.log(numSquare(12));

// var numSquare = function (n) {
//     // Define 1D array
//     let dp = Array(n + 1).fill(0);

//     for (let i = 1; i <= n; i++) {
//       dp[i] = i; // Initialize to the worst case, where each number is represented by 'i' 1's.
//       for (let j = 1; j * j <= i; j++) {
//         dp[i] = Math.min(dp[i], 1 + dp[i - j * j]);
//       }
//     }

//     return dp[n];
//   };

// console.log(numSquare(12)); // Output should be 3 (as 12 = 4 + 4 + 4)
