var summaryRange = function (nums) {
  let n = nums.length;
  const ans = [];
  for (let i = 0; i < n; i++) {
    let start = nums[i];
    while (i + 1 < n && nums[i] + 1 == nums[i + 1]) {
      i++;
    }
    if (start != nums[i]) {
      ans.push(start + "->" + nums[i]);
    } else {
      ans.push(start + "");
    }
  }
  return ans;
};

const nums = [0, 1, 2, 4, 6, 7, 9];

console.log(summaryRange(nums));

const nums1 = [0, 2, 3, 4, 6, 8, 9];
console.log(summaryRange(nums1));
