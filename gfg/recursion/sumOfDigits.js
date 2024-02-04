function sumOfDigits(n) {
  if (n == 0) return;

  if (n <= 9) {
    return n;
  }

  let rem = n % 10;

  n = Math.floor(n / 10);

  return sumOfDigits(n) + rem;
}

//Note
// The Better Way To Solve This Problem in Iterative Approach

// so we can solve this problem in O(1) space Complexity
//  ans = sumOfDigits(253);
// console.log(ans);

//

//-------------Here Is The Iterative Solution

var calculateSum = function (n) {
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};

let ans = calculateSum(232);
console.log("Sum Of  Digits are .....> ", ans);
