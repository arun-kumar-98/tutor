/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (map.has(nums[i])) {
      const j = map.get(nums[i]);
      if (Math.abs(i - j) <= k) return true;
    }
    map.set(nums[i], i);
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
