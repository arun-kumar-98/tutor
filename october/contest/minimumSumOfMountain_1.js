/**
 * @param {number[]} nums
 * @return {number}
 */

//todo::: correct this code with optimal solution

var minimumSum = function (nums) {
  if (nums.length < 3) {
    return -1; // Not enough elements for a triplet.
  }

  let minSum = Number.MAX_SAFE_INTEGER; // Initialize with a large value

  for (let j = 1; j < nums.length - 1; j++) {
    let i = j - 1;
    let k = j + 1;

    if (i < j && j < k) {
      if (nums[i] < nums[j] && nums[k] < nums[j]) {
        let currentSum = nums[i] + nums[j] + nums[k];
        minSum = Math.min(minSum, currentSum);
      }
      // Check if it's a mountain.
    }
  }

  return minSum === Number.MAX_SAFE_INTEGER ? -1 : minSum;
};

console.log(minimumSum([5, 4, 8, 7, 10, 2]));
