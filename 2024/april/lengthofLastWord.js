/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  //split string

  let words = s.trim().split(/\s+/); //s.trim().split(" ")  :- can be also instead of regex
  console.log(words);
  let lengthOfLastWord = words[words.length - 1];
  console.log(lengthOfLastWord);
  return lengthOfLastWord.length;
};

console.log(lengthOfLastWord("Hello World"));

console.log(lengthOfLastWord("   fly me   to   the moon  "));
