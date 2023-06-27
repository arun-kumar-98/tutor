/**
 * @param {number} n
 * @return {number}
 */
const MOD = 1000000007;
// var modPow = function (x, y) {
//   if (y === 0) return 1;
//   if (y === 1) return x;
//   let smallMod = modPow(x, parseInt(y / 2)) % mod;
//   if (y % 2 === 0) return smallMod * smallMod;
//   else return x * smallMod * smallMod;
// };

// var countGoodNumbers = function (n) {
//   let x = modPow(BigInt(5), parseInt(n / 2));
//   let y = modPow(BigInt(4), parseInt(n / 2));

//   if (n % 2 == 0) {
//     return (x * y) % mod;
//   } else {
//     return (x * x * y) % mod;
//   }
// };

var countGoodNumbers = function (n) {
  const a = power(5, parseInt(n / 2));
  const b = power(4, parseInt(n / 2));
  if (n % 2 == 0) {
    return (a * b) % MOD;
  } else {
    return (a * a * b) % MOD;
  }
};

var power = function (x, n) {
  if (n == 0) {
    return 1;
  }

  if (n == 1) {
    return x;
  }

  const temp = power(x, parseInt(n / 2)) % MOD;
  if (n % 2 == 0) {
    return temp * temp;
  } else {
    return x * temp * temp;
  }
};

console.log(countGoodNumbers(50));
