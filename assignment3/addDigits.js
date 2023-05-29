/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let sum = 0;
  //checkm num >9
  while (num > 9) {
    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
    //initialize sum with 0 so we can add remainig elemenst
    sum = 0;
  }
  return num;
};

//console.log(addDigits(0));

//simplified solution

var addDigits1 = function (num) {
  if (num == 0) return 0;
  return num % 9 == 0 ? 9 : num % 9;
};

console.log(addDigits1(14));
