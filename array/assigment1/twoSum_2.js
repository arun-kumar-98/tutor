/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (numbers, target) {
//   //take two pointer

//   let start = 0;
//   let end = numbers.length - 1;

//   while (start < end) {
//     if (numbers[start] + numbers[end] > target) {
//       end--;
//     } else if (numbers[start] + numbers[end] < target) {
//       start++;
//     } else {
//       //return 1-based inexing array
//       return [start + 1, end + 1];
//     }
//   }
//   return [];
// };
// const numbers = [2, 7, 11, 15];
// let target = 20;
// console.log(twoSum(numbers, target));

// const numbers1 = [2, 3, 4];
// let target1 = 6;

// console.log(twoSum(numbers1, target1));

// const arr = [-1, 0];
// const target2 = -1;
// console.log(twoSum(arr, target2));

var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    if (numbers[start] + numbers[end] == target) {
      return [start + 1, end + 1];
    } else if (numbers[start] + numbers[end] > target) {
      end--;
    } else {
      start++;
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
