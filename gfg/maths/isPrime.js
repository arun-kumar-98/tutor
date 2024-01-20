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

var isPrime = function (n) {
  if (n === 1) return false;

  //start from 2
  //increment by square root of n

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(21));
