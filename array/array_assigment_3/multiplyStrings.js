/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 == "0" || num2 === "0") return "0";
  const arr = new Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      let p1 = i + j,
        p2 = i + j + 1;
      let sum = arr[p2] + Number(num1[i]) * Number(num2[j]);
      arr[p2] = Math.floor(sum % 10);
      arr[p1] = Math.floor(sum / 10);
    }
  }
  if (arr[0] == 0) arr.shift();
  return arr.join("");
};

console.log(multiply("2", "3"));
console.log(multiply("123", "456"));
console.log(multiply("", ""));
