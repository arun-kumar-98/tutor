/**
 * print sum of elements in array
 *
 */

function sumOfElements(input) {
  let ans = input.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return ans;
}

const input = [1, 2, 3, 4];
console.log(sumOfElements(input));

const input2 = [5, 8, 3, 10, 22, 45];
console.log(sumOfElements(input2));
