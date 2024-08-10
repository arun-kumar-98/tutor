/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let age = 0,
    count = 0;

  let citizens = "";

  for (let detail of details) {
    firstDigitOfage = detail[11];
    secondDigitOfAge = detail[12];
    citizens = firstDigitOfage + secondDigitOfAge;
    ans = parseInt(citizens);
    if (ans > 60) {
      count++;
    }
  }
  return count;
};
const details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"],
  details1 = ["1313579440F2036", "2921522980M5644"];

console.log(countSeniors(details));
console.log(countSeniors(details1));
