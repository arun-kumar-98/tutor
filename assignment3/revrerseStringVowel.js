/**
 * @param {string} s
 * @return {string}
 */

// var isVowel = function (letter) {
//   const ch = letter.toLowerCase();
//   return (
//     letter == "a" ||
//     letter == "e" ||
//     letter == "i" ||
//     letter == "o" ||
//     letter == "u"
//   );
// };

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[j] = arr[i];
//   arr[j] = temp;
// }
// var reverseVowels = function (s) {
//   //create two ponter
//   //split string into array

//   const arr = s.split("");
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let isValidLeft = isVowel(arr[left]);
//     let isValidRight = isVowel(arr[right]);
//     console.log(isValidLeft, "", isValidRight);

//     //if valid
//     if (isValidLeft && isValidRight) {
//       swap(arr, left, right);
//       left++;
//       right--;
//     }
//     if (!isValidLeft) {
//       ++left;
//     }
//     if (!isValidRight) {
//       --right;
//     }
//   }
//   return arr.join("");
// };

// const resp = reverseVowels("hello");
// console.log(resp);

var VOWELS = "aeiouAEIOU";
var reverseVowels = function (s) {
  const str = s.split("");
  let left = 0;
  let right = s.length;

  for (let i = 0, j = s.length; i < j; i++, j--) {
    while (!VOWELS.includes(str[i]) && i < j) {
      i++;
    }
    while (!VOWELS.includes(str[j]) && i < j) {
      j--;
    }
    //swap

    [str[i], str[j]] = [str[j], str[i]];
  }
  return str.join("");
};

const resp = reverseVowels("Hello");
console.log(resp);

const resp1 = reverseVowels("leetcode");
console.log(resp1);

//T.C : O(N)
//S.c : O(1)

//using set

var reverseVowel = function (s) {
  const isVowel = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let left = 0;
  let right = s.length - 1;
  let str = s.split("");

  while (left < right) {
    //check for left
    while (left < right && !isVowel.has(str[left])) {
      left++;
    }
    while (left < right && !isVowel.has(str[right])) {
      right--;
    }

    //swap
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    //
    left++;
    right--;
  }

  return str.join("");
};

const re = reverseVowel("Hello");

console.log(re);

const respeqe = reverseVowel("leetcode");
console.log(respeqe);
