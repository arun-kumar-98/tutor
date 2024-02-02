/**
 *
 * @param{Number}
 *
 * @returns{void}
 */

var fun = function (n) {
  if (n == 0) return;
  console.log("GFG");

  fun(n - 1);
};
fun(5);
