/**
 * @param {string} s
 * @return {string}
 */
/** 
var longestPalindrome = function (s) {
  let n = s.length;

  let maxLength = 0;
  let sp = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (solve(s, i, j) && j - i + 1 > maxLength) {
        maxLength = j - i + 1;
        sp = i;
      }
    }
  }
  let ans = s.substring(sp, sp + maxLength);
  return ans;
};

function solve(s, i, j) {
  while (i <= j) {
    if (s[i] != s[j]) return false;
    i++;
    j--;
  }
  return true;
}

//check if string is pallindrom

function solve(s, i, j) {
  if (i >= j) return true;

  if (s[i] === s[j]) {
    return solve(s, i + 1, j - 1);
  }
  return false;
}

//try with  iterative approach

function solve(s, i, j) {
  if (i >= j) return true;

  if (s[i] === s[j]) {
    return solve(s, i + 1, j - 1);
  }
  return false;
}
*/

/**
 *
 * @param {*} s
 * @returns
 *
 *
 *
 * todo:: top and buttom up approach
 */
var longestPalindrome = function (s) {
  const n = s.length;
  let maxLength = 0;
  let sp = 0;

  //create 2d dp array

  const dp = new Array(n + 1).map(() => new Array(n + 1)).fill(-1);
  function solve(s, i, j) {
    if (i >= j) return true;
    if (dp[i][j] != -1) {
      return dp[i][j];
    }

    if (s[i] === s[j]) {
      return (dp[i][j] = solve(s, i + 1, j - 1));
    }
    return (dp[i][j] = false);
  }
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (solve(s, i, j) && j - i + 1 > maxLength) {
        maxLength = j - i + 1;
        sp = i;
      }
    }
  }
  let ans = s.substring(sp, sp + maxLength);
  return ans;
};

//APPROACH #2 WITH DP

console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("babad"));
