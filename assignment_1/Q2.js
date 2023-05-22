/**
 * print element present in key
 */

function presentedElement(input, key) {
  for (let i = 0; i < input.length; i++) {
    if (i == key) return input[i];
  }
}

const input1 = [10, 20, 30, 40, 50];

console.log(presentedElement(input1, 2));

const input2 = [10, 20, 30, 40, 50, 60, 70];
console.log(presentedElement(input2, 4));
