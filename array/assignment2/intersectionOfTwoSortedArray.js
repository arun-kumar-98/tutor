/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let n = nums1.length;
  let m = nums2.length;
  let i = 0,
    j = 0;
  const set = new Set();
  while (i < n && j < m) {
    if (nums1[i] > nums2[j]) j++;
    else if (nums1[i] < nums2[j]) i++;
    else {
      set.add(nums1[i]);
      i++;
      j++;
    }
  }
  const arr = new Array();
  for (const element of set) {
    arr.push(element);
  }
  return arr;
};

// console.log(intersection([1, 2, 2, 1], [2, 2]));
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

// var intersection = function (nums1, nums2) {
//   const set = new Set();
//   const intersect = [];

//   for (const num of nums1) {
//     set.add(num);
//   }

//   //iterate nums2 array and check if element exist in array

//   for (const num of nums2) {
//     if (set.has(num)) {
//       //push in array
//       intersect.push(num);
//       // delete  element from set
//       set.delete(num);
//     }
//   }
//   return intersect;
// };

const n1 = [
  61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86,
  58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34,
  62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42,
  65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55,
  66, 82, 0, 79, 11, 81,
];
const n2 = [
  5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84,
  38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48,
];

// console.log(intersection(n1, n2));
// //console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
//===============================================================
//===============================================================
//===============================================================

//code optimization

// var intersection = function (nums1, nums2) {
//   const hash = new Set(nums1);
//   const intersectedElement = [];
//   const hash2 = new Set(nums2.filter((num) => hash.has(num)));
//   //push in array
//   hash2.forEach((num) => intersectedElement.push(num));
//   return intersectedElement;
// };

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersection(n1, n2));
