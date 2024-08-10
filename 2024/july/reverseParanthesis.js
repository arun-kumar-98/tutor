/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const stack = [];
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(result.length);
      console.log("stack ", stack);
    } else if (s[i] == ")") {
      let l = stack.pop();
      result = reverse(result, l);
      console.log("after reverse ", result);

    } else {
      result += s[i];
    }
  }
  return result;
};

function reverse(str, l) {
  let before = str.slice(0, l);
  let toReverse = str.slice(l, str.length);
  s = toReverse.split("").reverse().join("");
  return before + s;
}
let s = "(abcd)";
//console.log(reverseParentheses(s));
let s2 = "(u(love)i)";
console.log(reverseParentheses(s2));
