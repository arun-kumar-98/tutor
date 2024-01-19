/***
 *
 * @param{Number,Number}
 *
 * @returns {Number}
 */

// var findLCM = function (a, b) {
//   //find max amongst them

//   let maxValue = Math.max(a, b);
//   while (true) {
//     if (maxValue % a === 0 && maxValue % b === 0) {
//       return maxValue;
//     }
//     maxValue++;
//   }

//   return -1;
// };

//time complexity ::O(a*b-max(a,b))

//space complexity::O(1)

var greatestCommonDivisor = function (a, b) {
  while (b !== 0) {
    a = a % b;
    [a, b] = [b, a];
  }
  return a;
};

var findLCMOfTwoNumbers = function (a, b) {
  let ans = (a * b) / greatestCommonDivisor(a, b);
  return ans;
};

///using formula
/***
 *
 *  (a*b)=lcm(a,b)*(gcd(a,b))
 * hence
 * lcm(a,b)=(a*b)/gcd(a,b);
 *
 */

console.log(findLCMOfTwoNumbers(4, 6));
