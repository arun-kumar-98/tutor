/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  //   const arr = [...new Set(nums)].sort((a, b) => b - a);

  //   if (arr.length >= 3) return arr[2];
  //   return arr[0];
  nums = [...new Set(nums)].sort((a, b) => b - a);
  if (nums.length < 3) return nums[0];
  return nums[2];
};
const resp = thirdMax([3, 2, 1]);
console.log(resp);

const res = thirdMax([1, 2]);
console.log(res);

const response = thirdMax([2, 2, 3, 1]);
console.log(response);
