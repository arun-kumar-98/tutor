/**
 *
 * @param {Array}
 */

var removeDuplicatestring = function (s) {
  if (s.length == 0) return;

  // create stack to store adjacent data strucuture\
  // const stack = [];
  const stack = new Array(s.length);
  stack.push(s[0]);
  console.log(" stack ", stack);
  // check element present in the top of the  stack or not

  for (let i = 1; i < s.length; i++) {
    if (stack.length !== 0 && s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};

console.log(removeDuplicatestring("abbaca"));
