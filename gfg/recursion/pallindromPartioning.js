/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [];
  const path = [];

  solve(0, s, path, res);
  return res;
};

//helper

function solve(index, s, path, result) {
  //Base case

  if (index === s.length) {
    result.push([...path]);
    return;
  }

  // Iterate index to length of string

  for (let i = index; i < s.length; i++) {
    if (isPalindrome(s, index, i)) {
      path.push(s.substring(index, i + 1));
      //recursive call here
      solve(i + 1, s, path, result);
      //Backtrack
      path.pop();
    }
  }
}

function isPalindrome(s, start, end) {
  while (start <= end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }
  return true;
}

console.log(partition("aabb"));
