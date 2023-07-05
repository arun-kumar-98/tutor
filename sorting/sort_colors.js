/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let low = 0,
    m = 0,
    h = nums.length - 1;
  while (m <= h) {
    if (nums[m] == 0) {
      [nums[low], nums[m]] = [nums[m], nums[low]];
      low++;
      m++;
    } else if (nums[m] == 1) {
      m++;
    } else if (nums[m] == 2) {
      [nums[m], nums[h]] = [nums[h], nums[m]];
      h--;
    }
  }
};

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   return arr;
// }

var sortColors1 = function (nums) {
  return nums.sort((a, b) => a - b);
};
const nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors1(nums));

const nums2 = [2, 0, 1];
console.log(sortColors1(nums2));
