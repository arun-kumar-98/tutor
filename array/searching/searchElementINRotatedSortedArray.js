/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {
//   //LINEAR SEARCHING
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) return i;
//   }
//   return -1;
// };

//OPTIMAL SEARCH USING BINARY SEARCH

// var search = function (nums, target) {
//   let low = 0;
//   let high = nums.length - 1;

//   while (low <= high) {
//     //calculate mid
//     let mid = Math.floor((low + high) / 2);

//     //check conditions

//     if (nums[mid] === target) {
//       return mid;
//     }

//     //check in left sorted array

//     if (nums[low] <= nums[mid]) {
//       if (nums[low] <= target && target <= nums[mid]) {
//         high = mid - 1;
//       } else {
//         low = mid + 1;
//       }
//       //right sorted array
//     } else {
//       if (nums[mid] <= target && target <= nums[high]) {
//         low = mid + 1;
//       }
//       high = mid - 1;
//     }
//   }
//   return -1;
// };

var search = function (nums, target) {
  return nums.indexOf(target);
};
const nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
console.log(search(nums, target));
