/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j]) return true;
//     }
//     return false;
//   }
// };
// const nums = [1, 2, 3, 4];
//console.log(containsDuplicate(nums));

//hashmap

// var containsDuplicate1 = function (nums) {
//   return new Set(nums).size !== nums.length;
// };
// console.log(containsDuplicate1([1, 2, 3, 4]));
const nums1 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// //console.log(containsDuplicate1(nums));
// console.log(containsDuplicate(nums1));

//using hashmap

var containsDuplicate = function (nums) {
  const hash = {};
  for (let num of nums) {
    hash[num] = (hash[num] || 0) + 1;
  }
  console.log("_______________ ", hash);
  //iterate
  for (let key in hash) {
    if (hash[key] !== 1) return true;
  }
  return false;
};

console.log(containsDuplicate(nums1));
console.log(containsDuplicate([1, 2, 3, 4]));
