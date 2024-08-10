/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const ans = [];

  // left side of array
  //right side  of array

  function leftArray(nums, target) {
    let low = 0,
      high = nums.length,
      leftElement = -1;

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);

      if (nums[mid] === target) {
        leftElement = mid;
        high = mid - 1;
      } else if (nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return leftElement;
  }
  function rightArray(nums, target) {
    let low = 0,
      high = nums.length;
    rightElement = -1;

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);

      if (nums[mid] === target) {
        rightElement = mid;
        low = mid + 1;
      } else if (nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return rightElement;
  }
  let firstElement = leftArray(nums, target);
  let lastElement = rightArray(nums, target);
  return [firstElement, lastElement];
};
let nums = [5, 7, 7, 8, 8, 10],
  target = 8;
console.log(searchRange(nums, target));
