/**
 *
 * @param {Number}
 * @returns {Number}
 */

//O(n) O(1)
// var computePower = function (x, n) {
//   let power = 1;

//   for (let i = 0; i < n; i++) {
//     power = power * x;
//   }
//   return power;
// };

//log(n) & log(n)

//varient #1
// var computePower = function (x, n) {
//   if (n == 0) return 1;
//   let temp = 0;

//   if (n % 2 === 0) {
//     temp = computePower(x, n / 2);
//     return temp * temp;
//   }
//   return computePower(x, n - 1) * x;
// };

//clean code

var computePower = function (x, n) {
  if (n == 0) return 1;
  let temp = computePower(x, Math.floor(n / 2));
  console.log(temp);
  temp = temp * temp;

  if (n % 2 === 0) {
    return temp;
  }
  return temp * x;
};

console.log(computePower(3, 5));
