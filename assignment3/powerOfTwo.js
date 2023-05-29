/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  //check n==1
  if (n == 0) return false;
  //check for other numbers
  while (n != 1) {
    if (n % 2 != 0) return false;
    n = n / 2;
  }
  return true;
};
// if (n == 0) return false;
// return Math.ceil(Math.log2(n)) == Math.floor(Math.log2(n));

const resp = isPowerOfTwo(3);
console.log(resp);
