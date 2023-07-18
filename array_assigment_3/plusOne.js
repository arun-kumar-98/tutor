/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.push(0);
  digits[0] = 1;
  return digits;
};

const digits = [4, 3, 2, 1];
console.log(plusOne(digits));
console.log(plusOne([9]));
console.log(plusOne([1, 2, 3]));
