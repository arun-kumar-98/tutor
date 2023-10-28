/**
 *
 * @param {*} n
 * @returns
 *
 *
 *
 * APPROACH # DP TOP-DOWN APPROACH
 */

// function countVowelPermutation(n) {
//   const M = 1000000007;
//   const a = 0,
//     e = 1,
//     i = 2,
//     o = 3,
//     u = 4;

//   const t = Array.from({ length: 5 }, () => Array(n + 1).fill(-1));

//   function solve(ch, n) {
//     if (n === 0) {
//       return 1;
//     }

//     if (t[ch][n] !== -1) {
//       return t[ch][n];
//     }

//     if (ch === a) {
//       return (t[ch][n] = solve(e, n - 1) % M);
//     } else if (ch === e) {
//       return (t[ch][n] = (solve(a, n - 1) + solve(i, n - 1)) % M);
//     } else if (ch === i) {
//       return (t[ch][n] =
//         (solve(a, n - 1) +
//           solve(e, n - 1) +
//           solve(o, n - 1) +
//           solve(u, n - 1)) %
//         M);
//     } else if (ch === o) {
//       return (t[ch][n] = (solve(i, n - 1) + solve(u, n - 1)) % M);
//     } else {
//       // ch === u
//       return (t[ch][n] = solve(a, n - 1));
//     }

//     return (t[ch][n] = 0);
//   }

//   let result = 0;
//   result = (result + solve(a, n - 1)) % M;
//   result = (result + solve(e, n - 1)) % M;
//   result = (result + solve(i, n - 1)) % M;
//   result = (result + solve(o, n - 1)) % M;
//   result = (result + solve(u, n - 1)) % M;

//   return result;
// }

/**
 *
 *
 *
 * buttom up
 */

var countVowelPermutation = function (n) {
  const M = 1000000007;
  const a = 0,
    e = 1,
    i = 2,
    o = 3,
    u = 4;

  const t = Array.from({ length: 5 }, () => Array(n + 1).fill(-1));

  ///number of string ending with ith  having  j lenght

  for (let vowel = 0; vowel <= 4; vowel++) {
    t[vowel][1] = 1;
  }

  for (let len = 2; len <= n; len++) {
    t[a][len] = (t[e][len - 1] + t[i][len - 1] + t[u][len - 1]) % M;
    t[e][len] = (t[a][len - 1] + t[i][len - 1]) % M;
    t[i][len] = (t[e][len - 1] + t[o][len - 1]) % M;
    t[o][len] = t[i][len - 1] % M;
    t[u][len] = (t[i][len-1] + t[o][len - 1]) % M;
  }

  //

  let result = 0;

  for (let vowel = 0; vowel <= 4; vowel++) {
    result = (result + t[vowel][n]) % M;
  }
  return result;
};
// Example usage:
const n = 5; // Set your value of n
const vowelPermutations = countVowelPermutation(n);
console.log(vowelPermutations);
