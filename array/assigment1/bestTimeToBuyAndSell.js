/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let min = prices[0];
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     min = Math.min(min, prices[i]);
//     maxProfit = Math.max(maxProfit, prices[i] - min);
//   }
//   return maxProfit;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

var profit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
  }
  return maxProfit;
};
console.log(profit([7, 1, 5, 3, 6, 4]));

console.log(profit([7, 6, 4, 3, 1]));
