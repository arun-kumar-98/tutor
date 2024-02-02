/****
 *
 *
 *
 * @param{Number}
 * @returns {Number}
 */

var findOutput = function (n) {
  if (n === 0) return;

  console.log(n);
  //call recursive
  findOutput(n - 1);
  console.log(n);
};

findOutput(3);

