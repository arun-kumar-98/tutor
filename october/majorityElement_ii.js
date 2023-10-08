/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) map[nums[i]] = 0;

    map[nums[i]]++;
  }

  const ans = [];
  for (const ele in map) {
    if (map[ele] > nums.length / 3) ans.push(parseInt(ele));
  }

  return ans;
};

var majorityElement = function (nums) {
  let cnt1 = 0,
    element1 = Number.MIN_SAFE_INTEGER;
  let cnt2 = 0,
    element2 = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (cnt1 == 0 && nums[i] != element2) {
      element1 = nums[i];
      cnt1 = 1;
    } else if ((cnt2 = 0 && nums[i] != element1)) {
      element2 = nums[i];
      cnt2 = 1;
    } else if (nums[i] == element1) {
      cnt1++;
    } else if (nums[i] == element2) {
      cnt2++;
    } else {
      cnt1--;
      cnt2--;
    }
  }
  //iterate

  let count1 = 0,
    count2 = 0;
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == element1) {
      count1++;
    }
    if (nums[i] == element2) {
      count2++;
    }
  }

  if (count1 > Math.floor(nums.length / 3)) {
    ans.push(element1);
  }
  if (count2 > Math.floor(nums.length / 3)) {
    ans.push(element2);
  }
  return ans;
};

console.log(majorityElement([1, 2]));
