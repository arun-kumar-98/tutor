/**
 * print index equala to index
 */

function indexEqualsElement(input) {
  const result = [];
  for (let i = 0; i <= input.length; i++) {
    if (input[i] === i + 1) {
      result.push(input[i]);
    }
  }
  return result;
}

const input = [1, 22, 45, 12, 7];
console.log(indexEqualsElement(input));

const input2 = [15, 2, 45, 12, 7];
console.log(indexEqualsElement(input2));
