/**
 * print alternate element in array
 */

//using for loop

/**
 * NAIVE APPROACH
 *
 * @param {*} input
 * @returns array
 */

function alternateElementsForLoop(input) {
  const arr = [];
  for (let i = 0; i < input.length; i += 2) {
    arr.push(input[i]);
  }
  return arr;
}

const input11 = [1, 2, 3, 4];
console.log(alternateElementsForLoop(input11));

const input12 = [1, 2, 3, 4, 5];
console.log(alternateElementsForLoop(input12));

/**
 *OPTIMIZED
 *
 * @param {Array} input
 * @returns Array
 */
//approach 1: using  filter

function alternateElements(input) {
  let element = input.filter((_, i) => !(i % 2));
  return element;
}

const input1 = [1, 2, 3, 4];
console.log(alternateElements(input1));

const input2 = [1, 2, 3, 4, 5];
console.log(alternateElements(input2));
