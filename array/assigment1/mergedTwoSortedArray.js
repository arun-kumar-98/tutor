/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  while (i >= 0) nums1[k--] = nums1[i--];

  while (j >= 0) nums1[k--] = nums2[j--];

  return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
const nums2 = [2, 5, 6];
let n = 3;
// console.log(merge(nums1, m, nums2, n));
console.log([0], 0, [1], 1);
