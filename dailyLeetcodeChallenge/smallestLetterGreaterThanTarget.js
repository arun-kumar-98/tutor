/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

const letters = ["c", "f", "j"];
let target = "j";
var nextGreatestLetter = function (letters, target) {
  let low = 0;
  let high = letters.length - 1;

  if (target >= letters[letters.length - 1]) return letters[0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (letters[mid] > target) {
      high = mid - 1;
    } else low += 1;
  }
  return letters[low];
};

console.log(nextGreatestLetter(letters, target));
// const letters = ["c", "f", "j"];
// let target = "c";

// console.log(nextGreatestLetter(letters, target));

//appriach 2

// var nextGreatestLetter = function (letters, target) {
//   for (let i = 0; i < letters.length; i++) {
//     if (target < letters[i]) {
//       return letters[i];
//     }
//   }
//   return letters[0];
// };

// const letters = ["c", "f", "j"];
// let target = "a";

// console.log(nextGreatestLetter(letters, target));
