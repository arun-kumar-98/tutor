// var findMaxForm = function (strs, m, n) {
//   // convert list to frequency map list
//   const fms = strs.map((s) => {
//     const fm = { 0: 0, 1: 0 };
//     for (const c of s) fm[c]++;
//     return fm;
//   });

//   const dfs = (i, zeroes, ones, dp) => {
//     if (zeroes === 0 && ones === 0) return 0;
//     if (zeroes < 0 || ones < 0) return -10000; // we took too much, we better try another element
//     if (i >= fms.length) return 0; // since we need to return AT MOST 'zeroes' and 'ones' we return what we have so far

//     const key = `${i}_${zeroes}_${ones}`;
//     if (dp[key]) return dp[key];

//     const incl = dfs(i + 1, zeroes - fms[i]["0"], ones - fms[i]["1"], dp) + 1;
//     const skip = dfs(i + 1, zeroes, ones, dp);
//     return (dp[key] = Math.max(incl, skip));
//   };
//   return dfs(0, m, n, {});
// };
const strs = ["10", "0001", "111001", "1", "0"],
  m = 5,
  n = 3;

var findMaxForm = function (strs, m, n) {
  let dp = Array.from({ length: m + 1 }, () => new Uint8Array(n + 1));
  for (let i = 0; i < S.length; i++) {
    let str = strs[i],
      zeros = 0,
      ones = 0;
    for (let j = 0; j < str.length; j++)
      str.charAt(j) === "0" ? zeros++ : ones++;
    for (let j = m; j >= zeros; j--)
      for (let k = n; k >= ones; k--)
        dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1);
  }
  return dp[m][n];
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));
