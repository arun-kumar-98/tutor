/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = numbers.length - 1; j > 0; j--) {
      let sum = numbers[i] + numbers[j];
      if (target < sum) {
      }
    }
  }
};
