/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const n = nums.length;
  const stack = [];
  const ans = [];

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }
    stack.push(nums[i]);
  }
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans[i] = -1;
    } else {
      ans[i] = stack[stack.length - 1];
    }
    stack.push(nums[i]);
  }
  return ans;
};

const nums = [1, 2, 1];
//console.log(nextGreaterElements(nums));
const nums1 = [1, 2, 3, 4, 3];
//console.log(nextGreaterElements(nums1));

var nextGreaterElements2 = function (nums) {
  const n = nums.length;
  const ans = new Array(n).fill(-1);
  const stack = [];

  //first iteration

  for (let i = 0; i < 2 * n; i++) {
    while (stack.length && nums[i % n] > nums[stack[stack.length - 1]]) {
      ans[stack.pop()] = nums[i % n];
    }
    stack.push(i % n);
  }
  return ans;
};

console.log(nextGreaterElements2(nums));
console.log(nextGreaterElements2(nums1));
