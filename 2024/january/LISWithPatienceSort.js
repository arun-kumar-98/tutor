/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let n = nums.length;

  const ans = [];

  for (let i = 0; i < n; i++) {
    let index = binarySearch(ans, nums[i]);

    if (index === ans.length) {
      //set the value
      ans.push(nums[i]);
    }

    //replace th element
    ans[index] = nums[i];
  }
  return ans.length;
};

function binarySearch(sorted, target) {
  let left = 0,
    right = sorted.length;

  let result = sorted.length;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (sorted[mid] < target) {
      left = mid + 1;
    } else {
      result = mid;
      right = mid;
    }
  }
  return result;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
