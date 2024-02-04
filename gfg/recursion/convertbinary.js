/**
 * Number To Binary Conversion
 */

var convertIntoBinary = function (n) {
  if (n == 0) return;

  convertIntoBinary(Math.floor(n / 2));
  console.log(n % 2);
};

// var convertIntoBinary = function (n) {
//   if (n == 0) return;
//   console.log(n % 2);
//   convertIntoBinary(Math.floor(n / 2));
// };

convertIntoBinary(5);
console.log("----------------");
convertIntoBinary(8);
