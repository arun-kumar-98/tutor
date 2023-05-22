/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  //create variable and assign to 0
  let lastIndex = 0;
  // iterate over array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[lastIndex] = nums[i];
      lastIndex++;
      console.log(nums);
    }
  }
  console.log(lastIndex);
  for (let i = lastIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
  console.log(nums);
};
moveZeroes([0, 1, 0, 3, 12]);

// var moveZeroes = function (nums) {
//   //create variable and assign to 0
//   let lastIndex = 0;

//   for (let i of nums) {
//     if (nums[i] > 0) {
//       nums[lastIndex] = nums[i];
//       lastIndex++;
//     }
//     console.log(nums);
//   }
//   //   while (nums.length > lastIndex) {
//   //     nums[lastIndex] = 0;
//   //     lastIndex++;
//   //   }
//   console.log(nums);
// };

// moveZeroes([0, 1, 0, 3, 12]);
