// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

// //brute force approach
var findDisappearedNumbers = function (nums) {
  const ans = [];
  const missing = [];
  for (let i = 1; i <= nums.length; i++) {
    ans.push(i);
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < ans.length; i++) {
    if (!nums.includes(ans[i])) missing.push(ans[i]);
  }
  return missing;
};

// //optimze solution
// var findDisappearedNumbers = function (nums) {
//   const ans = [];
//   for (let i = 0; i < nums.length; i++) {
//     let index = Math.abs(nums[i]) - 1;
//     if (nums[index] < 0) continue;
//     nums[index] *= -1;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) ans.push(i + 1);
//   }
//   return ans;
// };

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
console.log(findDisappearedNumbers([1, 1]));
