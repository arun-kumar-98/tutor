/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // sort
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0,
    j = 0;
  const ans = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] == nums2[j]) {
      ans.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] > nums2[j]) j++;
    else if (nums1[i] < nums2[j]) i++;
  }
  return ans;
};

const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];

const nums = [4, 9, 5],
  nums0 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));
console.log(intersect(nums, nums0));
