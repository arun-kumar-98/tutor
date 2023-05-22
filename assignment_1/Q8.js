/**
 * find sorted element except two or more greatest element
 */

//using for loop

// function sortArray(input) {
//   let temp;
//   // const sortArray = [];
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] < input[j]) {
//         temp = input[i];
//         input[i] = input[j];
//         input[j] = temp;
//       }
//     }
//   }
//   //slice

//   //sort in ascending  order
// }

// const input = [2, 8, 7, 1, 5];
// const response = sortArray(input);
// console.log(response);

function sortedelement(input) {
  //sort in descending order
  input = input.sort((a, b) => b - a);
  // console.log(descendingOrder);

  //slice()
  // console.log(input);

  input = input.slice(2);
  // console.log(input);
  //sort in ascending order

  input = input.sort((a, b) => a - b);
  //console.log(input);
  return input;
}

const input = [2, 8, 7, 1, 5];
console.log(sortedelement(input));
const input2 = [7, -2, 3, 4, 9, -1];
console.log(sortedelement(input2));
