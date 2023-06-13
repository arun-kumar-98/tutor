/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const nums = [-1, 0, 1, 2, -1, -4];
//naive approach
var threeSum = function (nums) {
  const res = [];
  const indexes = [];
  const target_sum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          target_sum === nums[i] + nums[j] + nums[k] &&
          !indexes.includes(i) &&
          !indexes.includes(j) &&
          !indexes.includes(k)
        ) {
          res.push(nums[i], nums[j], nums[j]);
          indexes.push(i);
          indexes.push(j);
          indexes.push(k);
        }
      }
    }
  }
  return res;
};

console.log(threeSum(nums));
