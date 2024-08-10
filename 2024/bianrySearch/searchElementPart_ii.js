/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    ///checking duplicate case
    // arr[low]==arr[mid]==arr[high]
    //shrink the left and shrink the right element
    if (nums[mid] === target) return true;

    if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
      low = low + 1;
      high = high - 1;
      continue;
    }

    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 10));
