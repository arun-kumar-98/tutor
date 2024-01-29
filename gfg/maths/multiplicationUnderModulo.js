/**
 *
 *
 * @param{number}
 *
 * @returns {number}
 *
 *
 */

var multiplicationUnderModulo = function (a, b) {
  const MOD = BigInt(1e9 + 7);

  //convert input parameters into BigInt()

  let num1 = BigInt(a) % MOD;
  let num2 = BigInt(b) % MOD;

  let ans = (num1 * num2) % MOD;

  return ans;
};

console.log(multiplicationUnderModulo(92233720368547758, 92233720368547758));
