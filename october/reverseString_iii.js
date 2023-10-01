/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  //   //O(n)
  //   // let words = s.split(' ')
  //   // let newReversedWords = words.map(word => {
  //   //     let ans = word.split('').reverse().join('')
  //   //     return ans
  //   // })

  //   // return newReversedWords.join(' ')

  //   /**

  //     USING TOKENIZER
  //      */

  let wordsPattern = /\S+/g;
  let tokens = s.match(wordsPattern);
  console.log(tokens);

  //reverse the token
  if (!tokens) return "";

  let reversedToken = tokens.map((token) => {
    let ans = token.split("").reverse().join("");
    return ans;
  });
  //replaced the original string with matcched token and at the end return the string
  return s.replace(wordsPattern, () => reversedToken.shift());
};

// function reverseWords(s) {
//   // Define a regular expression pattern to match words
//   const wordPattern = /\S+/g;

//   // Use the `match` method to tokenize the input string
//   const tokens = s.match(wordPattern);

//   // Check if there are no tokens (empty string or no words)
//   if (!tokens) {
//     return "";
//   }

//   // Reverse each token (word) and store them in a new array
//   const reversedTokens = tokens.map((token) => {
//     // Use split, reverse, and join to reverse the characters in each token
//     return token.split("").reverse().join("");
//   });

//   // Use the `replace` method to substitute the reversed tokens back into the original string
//   return s.replace(wordPattern, () => reversedTokens.shift());
// }

const input = "Let's take LeetCode contest";
const output = reverseWords(input);
console.log(output); // Output: "s'teL ekat edoCteeL tsetnoc"

console.log(reverseWords("Let's take LeetCode contest"));
