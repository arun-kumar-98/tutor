var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2);

    console.log(mid);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};
let nums = [-1, 0, 3, 5, 9, 12],
  target = 9;

console.log(search(nums, target));
