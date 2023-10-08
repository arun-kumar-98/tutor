/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var maxDotProduct = function (nums1, nums2) {
//   const m = nums1.length;
//   const n = nums2.length;

//   //create 2-d array
//   const dp = Array.from({ length: m + 1 }, () =>
//     Array.from({ length: n + 1 })
//   ).fill(-1000000);

//   console.log(dp);
//   function solve(nums1, nums2, i, j) {
//     if (i === m || j === n) return -1000000;

//     if (dp[i][j] != -1000000) return dp[i][j];

//     let value = nums1[i] * nums2[j];

//     let take_i_j = solve(nums1, nums2, i + 1, j + 1) + value;
//     let take_i = solve(nums1, nums2, i, j + 1);
//     let take_j = solve(nums1, nums2, i + 1, j);

//     dp[i][j] = Math.max(value, Math.max(take_i_j, Math.max(take_i, take_j)));
//     console.log(dp[i][j]);
//     return dp[i][j];
//   }
//   return solve(nums1, nums2, 0, 0);
// };

var maxDotProduct = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;

  // Create a 2D array to store the results
  const dp = Array.from({ length: m }, () => Array(n).fill(-Infinity));

  function solve(i, j) {
    if (i === m || j === n) return -Infinity;

    if (dp[i][j] !== -Infinity) return dp[i][j];

    let take_i_j =
      nums1[i] * nums2[j] + (i + 1 < m && j + 1 < n ? solve(i + 1, j + 1) : 0);
    let take_i = solve(i, j + 1);
    let take_j = solve(i + 1, j);

    dp[i][j] = Math.max(take_i_j, take_i, take_j, nums1[i] * nums2[j]);

    return dp[i][j];
  }

  return solve(0, 0);
};

const nums1 = [2, 1, -2, 5];
const nums2 = [3, 0, -6];

const nums11 = [3, -2],
  nums22 = [2, -6, 7];
console.log(maxDotProduct(nums11, nums22));

