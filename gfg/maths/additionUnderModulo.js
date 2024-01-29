/**
 *
 * @param {Number}
 *
 * @returns {Number}
 *
 * return value is very big
 *
 * mod it by 10^9+7
 */

var additionUnderModulo = function (a, b) {
  //declare MOD

  const MOD = BigInt(1e9 + 7);

  //convert it input parameters into BigInt format
  // by this  we can handle big numbers

  let num1 = BigInt(a);
  let num2 = BigInt(b);

  //Calculate the sum and then perform MOD

  let ans = (num1 + num2) % MOD;

  return ans;
};

console.log(additionUnderModulo(9223372036854775807, 9223372036854775807));
