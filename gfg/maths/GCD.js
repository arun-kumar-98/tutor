/**
 *
 * @param{Number,Number} a,b
 *
 * @returns {Number}
 */

//NAIVE APPROACH

// var greatestCommonDivisor = function (a, b) {
//   if (a < 0 || b < 0) return undefined;
//   //find there min value amongs them

//   let minValue = Math.min(a, b);

//   while (minValue > 0) {
//     if (a % minValue === 0 && b % minValue === 0) {
//       return minValue;
//     } else {
//       minValue--;
//     }
//   }
//   return -1;
// };

//------------------------EUCLIDEAN ALGORITHM----------------

// var greatestCommonDivisor = function (a, b) {
//   if (b === 0) {
//     return a;
//   }
//   return greatestCommonDivisor(b, a % b);
// };

//----------------------ITERATION SOLUTION---------------------

var greatestCommonDivisor = function (a, b) {
  while (b !== 0) {
    a = a % b;
    [a, b] = [b, a];
  }
  return a;
};

 console.log(greatestCommonDivisor(4, 6));
// console.log(greatestCommonDivisor(100, 200));
console.log(greatestCommonDivisor(7, 13));
