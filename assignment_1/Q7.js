/**
 * remove max and min elements from an array
 */

function removeMaxAndMinElements(arr) {
  let input = arr.sort();
  console.log(input);
  let N = input.length;
  if (N % 2 != 0) {
    while (N > 1) {
      input.shift();
      input.pop();
      N = N - 2;
    }
  } else {
    while (N > 2) {
      input.shift();
      input.pop();
      N = N - 2;
    }
    input.pop();
  }
  return input;
}
const arr = [8, 2, 9, 4, 3, 7, 5];
console.log(removeMaxAndMinElements(arr));

const arr2 = [8, 1, 2, 9, 4, 3, 7, 5];
console.log(removeMaxAndMinElements(arr2));
