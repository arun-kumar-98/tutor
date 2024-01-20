/**
 * 
 * 
 * 
 *@param {Number}
 @returns {boolean}
 */

/**
 *
 * Time Complexity::O(N)
 * Space Complexity::O(1)
 */
// var isPrime = function (n) {
//   if (n === 1) return false;

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

/**
 *
 * redicing the time comppexity in square root on N
 *
 * Space Complexity::O(1)
 */

// var isPrime = function (n) {
//   if (n === 1) return false;

//   //start from 2
//   //increment by square root of n

//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

///further optimization of code

var isPrime = function (n) {
  if (n == 1 || n == 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i++) {
    if (n % i === 0 || n % (i + 2)) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(21));
