/**
 * @param{[]}
 * @returns {[]}
 */

var rotateArray = function (arr) {
  let n = arr.length;
  let e1 = arr[0];
  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n - 1] = e1;
  console.log(arr);

  return arr;
};

console.log(rotateArray([1, 2, 3, 4, 5]));
