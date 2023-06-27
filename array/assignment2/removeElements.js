/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   let i = 0;
//   let j = 0;
//   while (i < nums.length) {
//     if (nums[i] != val) {
//       nums[j] = nums[i];
//       j++;
//     }
//     i++;
//   }
//   return j;
// };
//console.log(removeElement([3, 2, 2, 3], 3));
//console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

var removeElement = function (nums, val) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
