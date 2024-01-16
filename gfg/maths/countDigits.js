/**
 *
 * @param{Number}
 * @returns {number}
 */

// Traditional Approach

var countDigit = function (n) {
  if (n <= 0) return -1;
  let count = 0;
  while (n > 0) {
    count++;

    n = Math.floor(n / 10);
  }
  return count;
};

// Logarithmic Approach
//concept log base 10

var countDigit = function (n) {
  if (n <= 0) return -1;

  console.log(Math.log10(n));

  let ans = Math.ceil(Math.log10(n));

  console.log("------ANS ------>", ans);
  return ans;
};

console.log(countDigit(7898765423499090));
