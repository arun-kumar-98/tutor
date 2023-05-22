/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  //create oddCount variable
  //iterate to n
  //check odd condition condition
  // if odd count ++
  //if count ===3 return true
  //else set count=0
  // return false;

  let oddCount = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 != 0) {
  //       oddCount++;
  //       if (oddCount === 3) {
  //         return true;
  //       }
  //     } else {
  //       oddCount = 0;
  //     }
  //   }

  for (const i of arr) {
    if (i % 2 > 0) {
      oddCount++;
      if (oddCount > 2) return true;
    } else {
      oddCount = 0;
    }
  }
  return false;
};

const resp = threeConsecutiveOdds([2, 6, 4, 1]);
console.log(resp);

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
