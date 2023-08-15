/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const map = {};
  const ans = [];
  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  console.log(map);
  for (const key of Object.keys(map)) {
    if (map[key] === 1) ans.push(key);
  }
  return ans;
};

//const nums = [1, 2, 1, 3, 2, 5];
//console.log(singleNumber(nums));

var singleNumber1 = function (nums) {
  nums.sort((a, b) => a - b);
  const ans = [];
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) i++;
    ans.push(nums[i]);
  }
  return ans;
};

const nums = [1, 2, 1, 3, 2, 5];
console.log(singleNumber1(nums));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) i++;
    else arr.push(nums[i]);
  }
  return arr;
};

const nums2 = [1, 2, 1, 3, 2, 5];
console.log(singleNumber1(nums2));
