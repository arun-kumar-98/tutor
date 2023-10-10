/**
 * @param {number[]} nums
 * @return {number}
 */

//we are getting TLE for this because we have long range of constraint 10^5
// var minOperations = function (nums) {
//   const n = nums.length;

//   let result = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < n; i++) {
//     let L = nums[i];
//     let R = L + n - 1;
//     //create set to handle duplicate elemensts

//     const used = new Set();

//     let operation = 0;
//     for (let j = 0; j < n; j++) {
//       if (nums[j] >= L && nums[j] <= R && !used.has(nums[j])) {
//         used.add(nums[j]);
//         continue;
//       } else {
//         operation++;
//       }
//     }
//     result = Math.min(result, operation);
//   }
//   return result;
// };

//optimized solution

var minOperations = function (nums) {
  const n = nums.length;
  let ans = n;

  const newNum = Array.from(new Set(nums)).sort((a, b) => a - b);
  console.log(newNum);
  let j = 0;
  for (let i = 0; i < newNum.length; i++) {
    while (j < newNum.length && newNum[j] < newNum[i] + n) {
      j++;
    }
    let count = j - i;
    ans = Math.min(ans, n - count);
  }

  return ans;
};

console.log(minOperations([4, 2, 5, 3]));
console.log(minOperations([1, 2, 3, 5, 6]));
console.log(minOperations([1, 10, 100, 1000]));
