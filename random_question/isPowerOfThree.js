/**
 *
 * @param {number} n
 * @returns {boolean}
 */

var isPowerOfThree = function (n) {
  if (n <= 0) return false;

  let divident = Math.floor(Math.log(n) / Math.log(3));
  console.log("------- ", divident);

  if (Math.pow(3, divident) === n) {
    return true;
  } else {
    return false;
  }
};

console.log(isPowerOfThree(243));

//using recursion

var isPowerOfThree = function (n) {
  if (n <= 0) return false;

  if (n === 1) return true;

  return isPowerOfThree(n / 3);
};

//traditional approach

//----------------------

var isPowerOfThree = function (n) {
  if (n <= 0) return false;

  while (n % 3 == 0) {
    n = Math.floor(n / 3);
  }
  console.log("----------n---> ", n);
  return n == 1;
};

console.log(isPowerOfThree(27));
