/**
 * @param {number} n
 * @return {number}
 */
// var pivotInteger = function (n) {
//   for (let pivot = 1; pivot <= n; pivot++) {
//     let leftSum = 0;
//     let rightSum = 0;

//     for (let i = 1; i <= pivot; i++) {
//       leftSum += i;
//     }

//     for (let j = pivot; j <= n; j++) {
//       rightSum += j;
//     }
//     if (leftSum === rightSum) return pivot;
//   }
//   return -1;
// };

// Using the maths formaula of sum of n natural  numbers
var pivotInteger = function (n) {
  let totalSum = Math.floor((n * (n + 1)) / 2);

  for (let pivot = 1; pivot <= n; pivot++) {
    //Sum of natural numbers till pivot
    //then calculate the rightSum by subtracting leftSum
    //Add pivot to the rightSUm  .So can include the pivot number also
    //check if leftSum===rightSum
    //return pivot else -1

    let leftSum = Math.floor((pivot * (pivot + 1)) / 2);
    rightSum = totalSum - leftSum + pivot;

    if (leftSum === rightSum) return pivot;
  }
  return -1;
};
console.log(pivotInteger(4));
console.log(pivotInteger(8));

/**
 *
 * Use Two Pointer
 *
 * O(n)
 * O(1)
 */
