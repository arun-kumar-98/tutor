/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return characterMatchHelper(s) === characterMatchHelper(t);
};

function characterMatchHelper(s) {
  //empty string
  let str = "";
  let hashCount = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) === "#") {
      hashCount++;
      continue;
    }

    if (hashCount > 0) {
      hashCount--;
    } else {
      str = str + s.charAt(i);
    }
  }
  console.log(str);
  return str;
}

// function getChar(s) {
//   let str = "";
//   let hashCount = 0;

//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s.charAt(i) === "#") {
//       hashCount++;
//       continue;
//     }

//     if (hashCount > 0) {
//       hashCount--;
//     } else {
//       str += s.charAt(i);
//     }
//   }
//   return str;
// }

//approach # USING STACK

// var backspaceCompare = function (s, t) {
//   const stackS = [];
//   const stackT = [];

//   function helper(str, stack) {
//     for (const char of str) {
//       if (char != "#") {
//         stack.push(char);
//       } else {
//         stack.pop();
//       }
//     }
//     return stack;
//   }
//   helper(s, stackS);
//   helper(t, stackT);
//   return stackS.join("") === stackT.join("");
// };

// let s = "ab#c",
//   t = "ad#c";
// let s1 = "ab##",
//   t1 = "c#d#";

// let s2 = "a#c",
//   t2 = "b";
// console.log(backspaceCompare(s, t)); // true
// console.log(backspaceCompare(s1, t1)); // true
// console.log(backspaceCompare(s2, t2)); // false

/**
 *
 *
 *
 *
 * FOLLOW UP QUESTION
 *
 * TRY TO SOLVE IN O(N) TIME AND O(1) SPACE COMPLEXITY
 */

var backspaceCompare = function (s, t) {
  let i = s.length - 1;
  let j = t.length - 1;

  skip_s = 0;
  skip_t = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === "#") {
        skip_s++;
        i--;
      } else if (skip_s > 0) {
        skip_s--;
        i--;
      } else {
        break;
      }
    }
    //similarly for j

    while (j >= 0) {
      if (t[j] === "#") {
        skip_t++;
        j--;
      } else if (skip_t > 0) {
        skip_t--;
        j--;
      } else {
        break;
      }
    }

    let first = i < 0 ? "" : s[i];
    let second = j < 0 ? "" : t[j];

    if (first != second) {
      return false;
    }
    i--;
    j--;
  }
  return true;
};

// let s0 = "bxj##tw",
//   t0 = "bxj###tw";
// console.log(backspaceCompare(s0, t0)); // false

// let s = "ab#c",
//   t = "ad#c";
// let s1 = "ab##",
//   t1 = "c#d#";

// let s2 = "a#c",
//   t2 = "b";
// console.log(backspaceCompare(s, t)); // true
// console.log(backspaceCompare(s1, t1)); // true
// console.log(backspaceCompare(s2, t2)); // false

console.log(backspaceCompare("xywrrmp", "xywrrmu#p"));//expectation :::::true:::::



