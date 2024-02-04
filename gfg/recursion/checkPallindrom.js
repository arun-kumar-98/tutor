/**
 *
 *
 * @param{String}
 * @returns{boolean}
 */

// var isPallindrome = function (str) {
//   // let lowerStr = str.toLowerCase();
//   let reverse = str.split("").reverse().join("");

//   console.log("---------> ", reverse);
//   return str === reverse;
// };

//------------try with recursive approach

var checkPallindrom = function (str, start, end) {
  if (start >= end) {
    return true;
  }

  //check for start index element of s and end index element of s
  //if they both are true then check call  checkPallindrom(,,,)
  //To compare next element of str till str.length-2

  return str[start] === str[end] && checkPallindrom(str, start + 1, end - 1);
};
console.log(checkPallindrom("ABBA", 0, 3));
