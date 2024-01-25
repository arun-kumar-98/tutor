/**
 *
 * @param {Number}
 * @returns {Number}
 */

//theta(log(n)) & O(1)
var computePower = function (x, n) {
  let powerCount = 1;

  while (n > 0) {
    if (n % 2 !== 0) {
      powerCount = powerCount * x;
    }
    x = x * x;
    //n
    n = Math.floor(n / 2);
  }
  return powerCount;
};

console.log(computePower(2, 2));
