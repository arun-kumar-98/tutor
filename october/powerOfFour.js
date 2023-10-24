/**
 *
 * @param {*} n
 *
 * APPROACH # 1 NAIVE APPROACH
 * APPROACH # 2 RECURSION
 *
 * APPROACH #3 BIT MANIPULATION
 */

// var isPowerOfFour = function (n) {
//   if (n <= 0) return false;

//   while (n > 1) {
//     if (n % 4 != 0) {
//       return false;
//     }
//     n /= 4;
//   }
//   return true;
// };

//clean code version of approach 1

// var isPowerOfFour = function (n) {
//   if (n <= 0) return false;

//   while (n % 4 === 0) {
//     n /= 4;
//     console.log(n);
//   }
//   if (n === 1) return true;
//   else {
//     return false;
//   }
// };

//USING RECURSION

// var isPowerOfFour = function (n) {
//   if (n <= 0) return false;

//   if (n === 1) return true;

//   if (n % 4 != 0) {
//     if (n % 4 != 0) return false;
//   }
//   return isPowerOfFour(n / 4);
// };

//MATHMATICAL APROACHES #3
//------------------------

// var isPowerOfFour = function (n) {
//   if (n <= 0) return false;

//   let x = Math.floor(Math.log(n) / Math.log(4));

//   if (Math.pow(4, x) === n) {
//     return true;
//   }
//   return false;
// };
//T.C :: O(LON(N)+LOG(X))

//BIT MANIPULATION

var isPowerOfFour = function (n) {
  if (n <= 0) return false;
  if ((n & (n - 1)) === 0 && (n - 1) % 3 === 0) return true;
  return false;
};
console.log(isPowerOfFour(64));
//T.C :: O(N)
