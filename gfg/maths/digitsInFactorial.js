/**
 * @param {number} N
 * @returns {number}
 */

//brute force
//optimization for large value for Time Limit Exception
// class Solution {
//   digitsInFactorial(N) {
//     // code here
//     let digit = 0;
//     if (N == 0 || N == 1) return 1;
//     let factrial = 1;
//     if (N <= 0 && N== 1) {
//       return 1;
//     }

//     let i = 2;

//     while (i <= N) {
//       factrial *= i;
//       i++;
//     }

//     // let factorial = N*( new Solution().digitsInFactorial(N - 1));
//     // console.log(factorial);

//     while (factrial > 0) {
//         factrial = Math.floor(factrial / 10);
//       digit++;
//     }
//     return digit;
//   }
// }

class Solution {
  digitsInFactorial(N) {
    // code here
    let digit = 0;
    if (N == 0 || N == 1) return 1;

    for (let i = 2; i <= N; i++) {
      console.log("*** ", Math.log10(i));
      digit += Math.log10(i);
      console.log("######", digit);
    }
    return Math.floor(digit) + 1;
  }
}
console.log(new Solution().digitsInFactorial(8468));
