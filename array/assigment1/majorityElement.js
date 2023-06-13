/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [2, 2, 1, 3, , 1, 2, 2];
const nums1 = [3, 2, 3];
var majorityElement = function (nums) {
  let majority = nums[0];
  let vote = 0;
  for (let i = 0; i < nums.length; i++) {
    if (vote == 0) {
      majority = nums[i];
    } else if (majority == nums[i]) {
      vote++;
    } else {
      vote--;
    }
  }
  return majority;
};

console.log(majorityElement(nums));

console.log(majorityElement(nums1));
