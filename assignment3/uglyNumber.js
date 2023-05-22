var uglyNumber = function (n) {
  if (n <= 0) return false;

  while (n !== 1) {
    //check all prime factors
    if (n % 2 == 0) {
      n = n / 2;
    } else if (n % 3 == 0) {
      n = n / 3;
    } else if (n % 5 == 0) {
      n = n / 5;
    } else {
      break;
    }
  }

  if (n === 1) {
    return true;
  } else {
    return false;
  }
};

// const result = uglyNumber(6);
// console.log(result);

//T.C : O(nlog2(n)) base could be either 2 ,3 or 5 since we are considering base 2 is highest
//S.C : O(1) since we are not taking any extra space

//APPROACH  #2
//recursivre approach

var isUgly = function (n) {
  if (n <= 0) return false;
  //if n is 1
  if (n === 1) return true;
  // anything below the
  if (n <= 5) return true;

  //ugly number [2,3,5]
  //

  for (const divisor of [2, 3, 5]) {
    //check %

    if (n % divisor === 0) {
      return isUgly(n / divisor);
    }
  }
  return false;
};

let resp = isUgly(14);
console.log(resp);
