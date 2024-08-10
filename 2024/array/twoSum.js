var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let more = target - nums[i];

    if (map.has(more)) {
      return [map.get(more), i];
    }
    map.set(nums[i], i);
  }
  return [-1, -1];
};

let nums = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(nums, target));

let nums1 = [3, 2, 4],
  target1 = 6;

console.log(twoSum(nums1, target1));
