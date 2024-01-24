/***
 *
 * @param{Number}
 * @returns{Number}
 */

// Time Compexity::O(n)
//Space Complexity::O(1)
// var printDivisors = function (n) {
//   if (n < 1) return undefined;
//   if (n == 1) return 1;

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       console.log(i);
//     }
//   }
//   return -1;
// };

//approach#2

// Time Complexity::O (sqrt(2))  , Space Complexity:: O(1)

var printDivisors = function (n) {
  let i;
  for (i = 1; i * i < n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
  console.log("--i...", i);

  for (; i >= 1; i--) {
    if (n % i === 0) {
      console.log(n / i);
    }
  }
};

printDivisors(10);
