/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let n = nums.length;
  const map = {};

  for (let i = 0; i < n; i++) {
    if (!map[nums[i]]) map[nums[i]] = 0;
    map[nums[i]]++;
  }

  const ans = [];

  for (const entry in map) {
    if (map[entry] > nums.length / 3) {
      ans.push(parseInt(entry));
    }
  }
  return ans;
};

console.log(majorityElement([3, 2, 3]));
