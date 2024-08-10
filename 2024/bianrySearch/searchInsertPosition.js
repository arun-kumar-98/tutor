/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  let searchPosition = nums.length;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] >= target) {
      searchPosition = mid;

      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

console.log(searchInsert([1, 2, 4, 7], 6));
