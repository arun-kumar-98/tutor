/**
 *
 */

function lessThanEqualsElement(input, N) {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] <= N) {
      count++;
    }
  }
  return count;
}

const input = [1, 2, 4, 5, 8, 10];
console.log(lessThanEqualsElement(input, 9));

const input2 = [1, 2, 2, 2, 5, 7, 9];
console.log(lessThanEqualsElement(input2, 2));
