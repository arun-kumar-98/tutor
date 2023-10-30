/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  arr.sort((a, b) => {
    let bitCountA = countBits(a);
    let bitCountB = countBits(b);
    if (bitCountA === bitCountB) {
      return a - b;
    }
    return bitCountA - bitCountB;
  });

  return arr;
};

function countBits(num) {
  let count = 0;
  while (num > 0) {
    count += num & 1;
    num >>= 1;
  }
  return count;
}

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
