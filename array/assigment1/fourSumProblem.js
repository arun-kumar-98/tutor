/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let ans = new Set();
  let n = nums.length;
  //sort array
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < n - 3; ++i) {
    if (i > 0 && nums[i] == nums[i - 1]) continue; //skip duplicates
    for (let j = i + 1; j < n - 2; ++j) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue; //skip duplicates

      let left = j + 1;
      let right = n - 1;
      while (left < right) {
        sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum > target) {
          right -= 1;
        } else if (sum == target) {
          const arr = [];
          //all elements to arr
          arr.push(nums[i]);
          arr.push(nums[j]);
          arr.push(nums[left]);
          arr.push(nums[right]);
          ans.add(arr);
          left++;
        } else {
          left++;
        }
      }
    }
  }
  const res = [];
  for (let it of ans) {
    res.push(it);
  }
  return res;
};

const nums = [1, 0, -1, 0, -2, 2];
let target = 0;

//console.log(fourSum(nums, target));
const nums1 = [2, 2, 2, 2, 2];
let target1 = 8;
