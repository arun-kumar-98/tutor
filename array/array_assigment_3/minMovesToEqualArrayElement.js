/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  if (nums == null || nums.length <= 1) return 0;
  let sum = 0;
  let min = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    min = Math.min(min, nums[i]);
  }
  return sum - min * nums.length;
};

const nums = [1, 2, 3];
//console.log(minMoves(nums));
const nums1 = [1, 3, 5, 6];
//console.log(minMoves(nums1));

var minMoves = function (nums) {
  let min_moves = 0;
  nums.sort((a, b) => a - b);

  for (let i = nums.length - 1; i >= 0; i--) {
    min_moves += nums[i] - nums[0];
  }
  return min_moves;
};

console.log(minMoves(nums));
console.log(minMoves(nums1));
console.log(minMoves([83, 86, 77, 15, 93, 35, 86, 92, 49, 21]));
