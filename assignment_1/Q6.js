/**
 * print perfect if original array ==reverse array
 */

//input
const input = [1, 2, 3, 4, 5];
const arr = [1, 2, 3, 2, 1];

//using traditonal for loop
//reverse array
function perfectArray(arr) {
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  let response = arr.every((values, index) => values === reversedArray[index]);

  if (response) return `PERFECT`;
  return `NOT PERFECT`;
}

console.log(perfectArray(arr));

console.log(perfectArray(input));

//approach 2:

/**
 * using inbuilt functions
 */

function perfectArrayCheck(input) {
  const reversedArray = input.slice().reverse();
  //console.log("______________ ", reversedArray);
  let response = input.every(
    (values, index) => values === reversedArray[index]
  );

  if (response) return `PERFECT`;
  return `NOT PERFECT`;
}

console.log(perfectArrayCheck(arr));
console.log(perfectArrayCheck(input));
