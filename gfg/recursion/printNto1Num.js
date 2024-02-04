/**
 *
 * @param{Number}
 * @returns{number}
 */

//print  N-1 Number
var printNum = function (n) {
  if (n === 0) return;

  console.log(n);
  //call recursive function here

  printNum(n - 1);
};

printNum(5);

//----------------------------------------------------------

//Print  i->N Number

var printNumbers = function (n) {
  if (n === 0) return;

  printNumbers(n - 1);
  console.log(n);
};

printNumbers(5);

//Note::  The Better Approach is for printing the solution is Use Iterative Approach
//because if use Recursive solution auxiliary space is overhead

//-----------Here  is Iterative Solution---------------------------------------

var nums = function (n) {
  for (let i = 1; i <= n; i++) {
    console.log("Inorder of Num N  ", i);
  }
};

nums(5);

//print the number in  reverse orer

var reverseNum = function (n) {
  for (let i = n; i >= 1; i--) {
    console.log("reverse order  of  N   ", i);
  }
};

reverseNum(5);
