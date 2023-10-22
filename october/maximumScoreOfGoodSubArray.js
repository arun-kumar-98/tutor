/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 *
 * @param {*} nums
 * @param {*} k
 *
 * APPROACH :: GREEDY
 */
var maximumScore = function (nums, k) {
  let n = nums.length;
  let i = k;
  let j = k;

  let currentMin = nums[k];
  let result = nums[k];

  while (i > 0 || j < n - 1) {
    let leftValue = i > 0 ? nums[i - 1] : 0;
    let rightValue = j < n - 1 ? nums[j + 1] : 0;

    if (leftValue < rightValue) {
      j++;
      currentMin = Math.min(currentMin, nums[j]);
    } else {
      i--;
      currentMin = Math.min(currentMin, nums[i]);
    }
    result = Math.max(result, currentMin * (j - i + 1));
  }
  return result;
};
const nums = [1, 4, 3, 7, 4, 5],
  k = 3;
console.log(maximumScore(nums, k));
