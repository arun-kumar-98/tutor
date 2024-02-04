/**
 *
 *
 *
 *
 * @param{Number}
 * @returns{string}
 *
 */

var printNames = function (i, n) {
  if (i > n) return;

  console.log("Recursion");

  printNames(i + 1, n);
};

printNames(1, 5);
