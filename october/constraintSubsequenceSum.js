/**
 * FIRST TRY WITH DP RECURSION AND MEMOIZATION
 *
 *
 * TODO:: SOLVE USINF THIS APPROACH
 */

/**
 *
 * @param {*} nums
 * @param {*} k
 * @returns
 *
 * OPTIMIZED SOLUTION::: SLIDING WINDOW TECHNIQUE

 */

var constrainedSubsetSum = function (nums, k) {
  const n = nums.length;
  // Create a copy of the nums array
  const t = [...nums];
  let maxR = t[0];
  const deq = [];

  for (let i = 0; i < n; i++) {
    // First get rid of out-of-range indices
    while (deq.length > 0 && deq[0] < i - k) {
      deq.shift();
    }

    if (deq.length > 0) {
      t[i] = Math.max(t[i], nums[i] + t[deq[0]]);
    }

    // Maintain the deque in descending order
    // So that you can get the optimum value at once from the front
    while (deq.length > 0 && t[i] >= t[deq[deq.length - 1]]) {
      deq.pop();
    }

    deq.push(i);
    maxR = Math.max(maxR, t[i]);
  }

  return maxR;
};

// Example usage:
const nums = [10, 2, 10, 7, 3];
const k = 3;
const result = constrainedSubsetSum(nums, k);
const nums1 = [10, 2, -10, 5, 20],
  k1 = 2;
console.log(constrainedSubsetSum(nums1, k1));
