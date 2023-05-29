/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// var findTheDifference = function (s, t) {
//   //use hash table

//   const map = {};

//   for (let i = 0; i < s.length; i++) {
//     map[s[i]] = (map[s[i]] | 0) + 1;
//     console.log(map);
//   }

//   console.log(map);
//   //for t
//   for (let i = 0; i < t.length; i++) {
//     if (map[t[i]] !== undefined && map[t[i]] > 0) {
//       map[t[i]]--;
//     } else {
//       return t[i];
//     }
//   }
// };

// let s = "";
// let t = "";
// const resp = findTheDifference(s, t);
// console.log(resp);

//tectoro

//find missing element
let s = "abcd",
  t = "abcde";

var findTheDifference = function (s, t) {
  let k = s;
  for (let i = 0; i < t.length; i++) {
    //if element of i index not present in string then store in one variable and return that variable
    //replace the element with  empty and return k that has remaining element
    if (k.indexOf(t.charAt(i)) == -1) {
      let chr = t.charAt(i);
      return chr;
    } else {
      k = k.replace(t.charAt(i), "");
    }
  }
  return k;
};

const resp = findTheDifference(s, t);
console.log(resp);
