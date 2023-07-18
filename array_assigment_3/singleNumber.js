/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  const map = {};

  for (const num of nums) map[num]++;
  console.log(map);

  for (const obj in map) {
  }
};
singleNumber([2, 2, 1]);

//optimized solution
// var singleNumber = function (nums) {
//   // using bit manipulation

//   let ans = 0;
//   for (const num of nums) {
//     ans = ans ^ num;
//   }
//   return ans;
// };
