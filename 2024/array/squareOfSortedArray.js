/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let n = nums.length;

  let low = 0,
    high = n - 1;

  // sqaure of elements

  for (let i = 0; i < n; i++) {
    nums[i] = Math.pow(nums[i],2); //nums[i] * nums[i];
  }

  console.log(nums);
  // sort the array
  const ans = [];
  for (let i = n - 1; i >= 0; i--) {
    if (nums[low] > nums[high]) {
      ans[i] = nums[low];
      low++;
    } else {
      ans[i] = nums[high];
      high--;
    }
  }
  return ans;
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));
