// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */
// var commonChars = function (words) {
//   const common = new Array(26).fill(Number.MAX_SAFE_INTEGER);
//   // console.log(common);

//   for (const word of words) {
//     const count = new Array(26);
//     console.log(count);
//     for (const s of word) {
//       // console.log(s);
//       count[s - "a"]++;
//       // console.log(count);
//     }

//     for (let i = 0; i < 26; i++) {
//       common[i] = Math.min(common[i], count[i]);
//       // console.log(common);
//     }
//   }
//   const ans = new Array();
//   for (let i = 0; i < 26; i++) {
//     for (let j = 0; j < common[i]; j++) {
//       ans.push("" + "a" + i);
//       console.log(ans);
//     }
//   }
//   return ans;
// };

var commonChars = function (words) {
  const ans = [];

  const firstArr = [...words[0]];
  console.log(firstArr);

  for (const letter of firstArr) {
    if (words.every((word) => word.includes(letter))) {
      ans.push(letter);
    }
    words = words.map((word) => word.replace(letter, ""));
  }
  return ans;
};

const words = ["bella", "label", "roller"];

console.log(commonChars(words));
