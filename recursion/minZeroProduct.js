/**
 * @param {number} p
 * @return {number}
 */
var minNonZeroProduct = function (p) {
  let r = BigInt(1);
  p = BigInt(p);
  r = 2n ** p - 2n;
  let mod = BigInt(1e9 + 7);
  function recursion(n, r) {
    if (n == 0n) return 1n;
    if (n == 1n) return r % mod;
    if (n % 2n !== 0n) {
      const temp = recursion((n - 1n) / 2n, r);
      return ((r * (temp * temp)) % mod) % mod;
    } else {
      const temp = recursion(n / 2n, r) % mod;
      return (temp * temp) % mod;
    }
  }
  return (recursion(r / 2n, r) * (r / 2n, r)) % mod;
};

console.log(minNonZeroProduct(2));
