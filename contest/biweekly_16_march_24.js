/**
 * @param {string} s
 * @return {string}
 */
var minimizeStringValue = function (s) {
  let minValue = Infinity;
  let result = "";

  function calculateValue(str) {
    let value = 0;
    const seen = {};

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== "?") {
        value += seen[str[i]] || 0;
        seen[str[i]] = (seen[str[i]] || 0) + 1;
      } else {
        for (let j = "a".charCodeAt(0); j < str.charCodeAt(i); j++) {
          const char = String.fromCharCode(j);
          value += seen[char] || 0;
        }
      }
    }

    return value;
  }

  function replaceQuestionMarkWithLetter(str, letter) {
    return str.replace("?", letter);
  }

  function dfs(index, current) {
    if (index === s.length) {
      let value = calculateValue(current);
      console.log(value);
      if (value < minValue || (value === minValue && current < result)) {
        minValue = value;
        result = current;
      }
      return;
    }

    if (s[index] === "?") {
      for (let charCode = "a"; charCode <= "z"; charCode++) {
        let replacedStr = replaceQuestionMarkWithLetter(current, charCode);
        console.log(replacedStr);
        dfs(index + 1, replacedStr);
      }
    } else {
      dfs(index + 1, current + s[index]);
    }
  }

  dfs(0, "");

  console.log("result   ", result);

  return result;
};

console.log(minimizeStringValue("???"));
