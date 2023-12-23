// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var incremovableSubarrayCount = function (nums) {
//   const n = nums.length;

//   const dp = new Array(n).fill(0);
//   let result = 0;

//   for (let i = 0; i < n; i++) {
//     dp[i] = 1;

//     if (i > 0 && nums[i] > nums[i - 1]) {
//       dp[i] = dp[i - 1] + 1; //increasing array
//     } else {
//       dp[i] = 1;
//     }
//     result += dp[i];
//   }
//   return result;
// };
// function countIncremovableSubarrays(nums) {
//   const n = nums.length;
//   const dp = new Array(n).fill(0);

//   let result = 0;

//   for (let i = 0; i < n; i++) {
//     dp[i] = 1; // Minimum count is 1 for the subarray with a single element

//     if (i > 0 && nums[i] > nums[i - 1]) {
//       dp[i] = dp[i - 1] + 1; // Extend the increasing or equal subarray
//     }

//     result += dp[i]; // Accumulate the count at each position
//   }

//   return result;
// }

// function countIncremovableSubarrays(nums) {
//   const n = nums.length;
//   const dp = new Array(n).fill(0);

//   let result = 0;

//   for (let i = 0; i < n; i++) {
//     dp[i] = 1; // Minimum count is 1 for the subarray with a single element

//     if (i > 0 && nums[i] > nums[i - 1]) {
//       dp[i] = dp[i - 1] + 1; // Extend the increasing subarray
//     }

//     result += dp[i]; // }Increment the count only if the current element is strictly greater
//   }

//   return result;
// }

function countIncremovableSubarrays(nums) {
    const n = nums.length;
    const dp = new Array(n);
  
    let result = 0;
  
    for (let i = 0; i < n; i++) {
      dp[i] = 1; // Minimum count is 1 for the subarray with a single element
  
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j] && dp[i] < dp[j] + 1 && nums[i] != nums[j]) { // Add the check for duplicates
          dp[i] = dp[j] + 1; // Extend the incremovable subarray
        }
      }
  
      result += dp[i];
    }
  
    return result;
  }

console.log(countIncremovableSubarrays([8, 7, 6, 6]));
