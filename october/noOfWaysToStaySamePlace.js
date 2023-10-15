/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */

//using 2d dp
var numWays = function (steps, arrLen) {
  const MOD = 1e9 + 7;
  arrLen = Math.min(arrLen, steps);

  const n = arrLen;

  const dp = new Array(501).fill(null).map(() => new Array(501).fill(-1));

  return solution(0, steps);

  function solution(idx, steps) {
    if (idx < 0 || idx == n) return 0;
    if (steps == 0) return idx == 0 ? 1 : 0;

    if (dp[idx][steps] != -1) {
      return dp[idx][steps];
    }

    let result = solution(idx + 1, steps - 1) % MOD; //right
    result = (result + solution(idx - 1, steps - 1)) % MOD; //left
    result = (result + solution(idx, steps - 1)) % MOD;

    return (dp[idx][steps] = result);
  }
};

/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */

// function numWays(steps, arrLen) {
//     const MOD = 1000000007;

//     // Note that furthest we can go is by only making moves to the right,
//     // but we can go to the right by "steps" moves.
//     // Thus, we can do, arrLen = Math.min(arrLen, steps)
//     arrLen = Math.min(arrLen, steps);

//     // Also, if you notice, you can only move away from 0 in the array by at most steps/2 to come back to 0.
//     // So, we can also do arrLen = Math.min(arrLen, (steps + 1) / 2); //(steps+1)/2 takes care of Odd case as well.
//     arrLen = Math.min(arrLen, Math.floor((steps + 1) / 2));

//     const n = arrLen;
//     const t = new Array(501);
//     for (let i = 0; i < 501; i++) {
//         t[i] = new Array(501).fill(-1);
//     }

//     return solve(0, steps);

//     function solve(idx, steps) {
//         if (idx < 0 || idx >= n) {
//             return 0;
//         }

//         if (steps === 0) {
//             return idx === 0 ? 1 : 0;
//         }

//         if (t[idx][steps] !== -1) {
//             return t[idx][steps];
//         }

//         let result = solve(idx + 1, steps - 1) % MOD; // RIGHT
//         result = (result + solve(idx - 1, steps - 1)) % MOD; // LEFT
//         result = (result + solve(idx, steps - 1)) % MOD; // STAY

//         t[idx][steps] = result;
//         return result;
//     }
// }

console.log(numWays(3, 2));

//more optized in space
// function numWays(steps, arrLen) {
//     const MOD = 1000000007;

//     // Note that furthest we can go is by only making moves to the right,
//     // but we can go to the right by "steps" moves.
//     // Thus, we can do, arrLen = Math.min(arrLen, steps)
//     arrLen = Math.min(arrLen, steps);

//     // Also, if you notice, you can only move away from 0 in the array by at most steps/2 to come back to 0.
//     // So, we can also do arrLen = Math.min(arrLen, (steps + 1) / 2); //(steps+1)/2 takes care of Odd case as well.
//     arrLen = Math.min(arrLen, Math.floor((steps + 1) / 2));

//     const n = arrLen;
//     const t = new Array(501);
//     for (let i = 0; i < 501; i++) {
//         t[i] = new Array(501).fill(-1);
//     }

//     return solve(0, steps);

//     function solve(idx, steps) {
//         if (idx < 0 || idx >= n) {
//             return 0;
//         }

//         if (steps === 0) {
//             return idx === 0 ? 1 : 0;
//         }

//         if (t[idx][steps] !== -1) {
//             return t[idx][steps];
//         }

//         let result = solve(idx + 1, steps - 1) % MOD; // RIGHT
//         result = (result + solve(idx - 1, steps - 1)) % MOD; // LEFT
//         result = (result + solve(idx, steps - 1)) % MOD; // STAY

//         t[idx][steps] = result;
//         return result;
//     }
// }
