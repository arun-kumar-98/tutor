/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let seen = new Set();
  while (n !== 1) {
    let sum = 0;
    while (n > 0) {
      sum += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }
    if (seen.has(sum)) {
      return false;
    } else {
      seen.add(sum);
      n = sum;
    }
  }
  return true;
};

const result = isHappy(1);
console.log(result);

//The first few unhappy numbers are 2, 3, 4, 5, 6, 8, 9, 11, 12, 14, 15, 16, 17, 18, 20,
