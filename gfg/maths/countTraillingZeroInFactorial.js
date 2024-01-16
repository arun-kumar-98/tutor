/**
 *
 * @param{Number}
 *
 * @returns {Number}
 */

/**
 *
 *
 * I have used here BigInt() to handle large number of factorial
 *
 *
 *
 *
 */
// NAIVE APPROACH

//--------------------
var countTraillingZeroInFact = function (n) {
  let fact = BigInt(1);

  if (n < 0) return undefined;

  if (n == 0 || n == 1) return 1;

  for (let i = 2; i <= n; i++) {
    fact *= BigInt(i);
  }
  console.log(fact);
  let count = 0;

  while (fact % BigInt(10) == 0) {
    count++;

    fact = fact / BigInt(10);
  }
  return count;
};

// console.log(countTraillingZeroInFact(100));

/**
 *
 *
 *
 * NOW DISCUSS OPTIMIZED SOLUTION
 *
 * count the multiple of 2*5
 */

var countTraillingZeroInFact = function (n) {
  let count = 0;

  for (let i = 5; i <= n; i = i * 5) {
    count += Math.floor(n / i);
  }
  return count;
};
console.log(countTraillingZeroInFact(251));

