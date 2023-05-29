/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let stringNumber = "";
  for (let i = 0; i < s.length; i++) {
    stringNumber += s.charCodeAt(i) - 96;
  }
  console.log(stringNumber);
  while (k != 0) {
    let sum = 0;
    for (let i = 0; i < stringNumber.length; i++) {
      sum += Number(stringNumber[i]);
    }
    stringNumber = sum.toString();
    k--;
  }

  return stringNumber;
};

//getLucky("iiii", 1);

//getLucky("leetcode", 2);
getLucky("xyzers", 3);
