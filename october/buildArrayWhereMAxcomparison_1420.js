/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
// var numOfArrays = function (n, m, k) {
//   let MOD = 1e9 + 7;
//   function solve(idx, searchCost, maxSoFor) {
//     //base case

//     if (idx === n) {
//       if (searchCost === k) {
//         return 1;
//       }
//       return 0;
//     }

//     let result = 0;

//     for (let i = 1; i <= m; i++) {
//       if (i > maxSoFor) {
//         result = (result + solve(idx + 1, searchCost + 1, i)) % MOD;
//       } else {
//         result = (result + solve(idx + 1, searchCost, maxSoFor)) % MOD;
//       }
//     }
//     return result;
//   }

//   return solve(0, 0, 0);
// };

//DP +RECURSION

// var numOfArrays = function (n, m, k) {
//   const MOD = 1e9 + 7;

//   //create 3-d array

//   const dp = Array.from({ length: n + 1 }, () =>
//     Array.from({ length: m + 1 }, () => Array.from({ length: k + 1 }, () => -1))
//   );
//   console.log(dp);
//   function solve(idx, searchCost, maxSoFor) {
//     if (idx === n) {
//       if (searchCost === k) {
//         return 1;
//       }
//       return 0;
//     }

//     if (dp[idx][searchCost][maxSoFor] != -1) {
//       return dp[idx][searchCost][maxSoFor];
//     }

//     let result = 0;

//     for (let i = 1; i <= m; i++) {
//       if (i > maxSoFor) {
//         result = (result + solve(idx + 1, searchCost + 1, i)) % MOD;
//       } else {
//         result = (result + solve(idx + 1, searchCost, maxSoFor)) % MOD;
//       }
//     }
//     dp[idx][searchCost][maxSoFor] = result;
//     console.log(result);
//     return result;
//   }

//   return solve(0, 0, 0);
// };

// var numOfArrays = function (n, m, k) {
//   const MOD = 1e9 + 7;
//   const dp = Array.from({ length: n + 1 }, () =>
//     Array.from({ length: m + 1 }, () => Array.from({ length: k + 1 }, () => -1))
//   );

//   function solve(idx, searchCost, maxSoFar) {
//     if (idx === n) {
//       if (searchCost === k) {
//         return 1;
//       }
//       return 0;
//     }

//     if (dp[idx][maxSoFar][searchCost] !== -1) {
//       return dp[idx][maxSoFar][searchCost];
//     }

//     let result = 0;

//     for (let i = 1; i <= m; i++) {
//       if (i > maxSoFar) {
//         result = (result + solve(idx + 1, searchCost + 1, i)) % MOD;
//       } else {
//         result = (result + solve(idx + 1, searchCost, maxSoFar)) % MOD;
//       }
//     }

//     dp[idx][maxSoFar][searchCost] = result;
//     return result;
//   }

//   return solve(0, 0, 0);
// };

// let n = 2,
//   m = 3,
//   k = 1;

const n = 50;
const m = 100;
const k = 25;

var numOfArrays = function (n, m, k) {
  const MOD = 1e9 + 7;

  // Create a 3-dimensional array for memoization
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => Array.from({ length: k + 1 }, () => -1))
  );

  function solve(idx, maxSoFar, searchCost) {
    if (idx === n) {
      if (searchCost === k) {
        return 1;
      }
      return 0;
    }

    if (dp[idx][maxSoFar][searchCost] !== -1) {
      return dp[idx][maxSoFar][searchCost];
    }

    let result = 0;

    for (let i = 1; i <= m; i++) {
      if (i > maxSoFar) {
        result = (result + solve(idx + 1, i, searchCost + 1)) % MOD;
      } else {
        result = (result + solve(idx + 1, maxSoFar, searchCost)) % MOD;
      }
    }

    dp[idx][maxSoFar][searchCost] = result;
    return result;
  }

  return solve(0, 0, 0); // Make sure the parameter order matches the function definition
};

console.log(numOfArrays(n, m, k)); // Call the function with the correct input

//console.log(numOfArrays(50, 100, 25));
