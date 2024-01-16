/**
 *
 * @param {*} num
 * @returns {boolean}
 */

//for number
var isPallindrom = function (num) {
  let temp = num;
  let reverse = 0;
  while (temp > 0) {
    let rem = temp % 10;

    reverse = reverse * 10 + rem;

    temp = Math.floor(temp / 10);
  }
  console.log("-------> ", reverse);

  return num === reverse;
};

//console.log(isPallindrom(121));
//console.log(isPallindrom(8668));

/**
 *
 * @param{string}
 *
 * @returns {boolean}
 *  */

// Traditional approach

//----------------------------
// var isStringPallindrom = function (s) {
//   let reverse = "";

//   for (let i = s.length - 1; i >= 0; i--) {
//     reverse += s[i];
//   }

//   console.log("-----reverse ----> ", reverse);
//   return s === reverse;
// };

//using string built -in function
//--------------------------------------
// var isStringPallindrom = function (s) {
//   let reverse = "";

//   //using string built -in function

//   //first split the string
//   let str = s.split("");
//   console.log("str----- ", str);
//   reverse = str.reverse().join("");

//   console.log("-----reverse ----> ", reverse);
//   return s === reverse;
// };

// recursion
var isStringPallindrom = function (s) {
  if (s === "") {
    return true;
  }

  console.log("s----------> ", s.substr(1, s.length - 1));
  return (
    s.charAt(0) === s.charAt(s.length - 1) &&
    isStringPallindrom(s.substr(1, s.length - 2))
  );
};

//time complexity:: O(length of string )
//space complexit :: O(1)
console.log(isStringPallindrom("madam"));
