/**
 *
 * @param {Number}
 *
 * @returns {Number}
 *
 */

// TRADITIONAL APPROACH FOR LOOP
var findFactorial = function (n) {
  let factrial = 1;
  if (n < 0) return undefined;
  if (n <= 0 && n == 1) {
    return 1;
  }

  for (let i = 2; i <= n; i++) {
    factrial *= i;
  }
  return factrial;
  //
};

//TRADITIONAL WHILE LOOP
var findFactorial = function (n) {
  let factrial = 1;
  if (n <= 0 && n == 1) {
    return 1;
  }

  let i = 2;

  while (i <= n) {
    factrial *= i;
    i++;
  }
  return factrial;
};

//RECURSIVE SOLUTION

var findFactorial = function (n) {
  if (n < 0) return undefined;

  if (n == 0 || n === 1) return 1;

  return n * findFactorial(n - 1);
};

console.log(findFactorial(6));
