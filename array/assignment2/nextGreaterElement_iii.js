// /**
//  * @param {number} n
//  * @return {number}
//  */
// var nextGreaterElement = function (n) {
//   const arr = Array.from(String(n), Number);
//   console.log("_____________ ", arr);
//   let l = arr.length - 1,
//     p = -1,
//     pVal = 0;

//   //start from right and find the first decreasing number
//   for (let i = l - 1; i >= 0; i--) {
//     if (arr[i] < arr[i + 1]) {
//       pVal = arr[i];
//       p = i;
//       break;
//     }
//   }
//   //if pVal is not found then return -1
//   if (pVal == -1) {
//     return -1;
//   }
//   //if p and pVal found then
//   //again start from right  most to point from array and find the first value greter then pval

//   for (let i = l; i >= 0; i--) {
//     if (arr[i] > pVal) {
//       swap(arr, p, i);
//       break;
//     }
//   }
//   //now reverse array from position p+1
//   reverse(arr, p + 1, l);
//   let ans = arr.join("");

//   //if the range is greater than max Number then
//   //return  value -1
//   if (ans > Math.pow(2, 31) || ans <= n) return -1;

//   return ans;
// };

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// function reverse(arr, i, j) {
//   while (i < j) {
//     swap(arr, i, j);
//     i++;
//     j--;
//   }
// }

// console.log(nextGreaterElement(2147483486));

var nextGreaterElement = function (n) {
  // First we convert the integer to integer array
  let arr = Array.from(String(n), Number);

  let l = arr.length - 1,
    p = -1,
    pVal = 0;

  // Start from right most and find the first decreasing number
  // For example if number is 2,3,6,5,4,1. Start from 4 and compare prev and find first decreasing number
  for (let i = l - 1; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      pVal = arr[i];
      p = i;
      break;
    }
  }
  // Now we would have found 3. So 3 is stored in pVal and its index 1 is stored in p

  // If p and pVal is not found, then return -1.
  if (p === -1) {
    return -1;
  }

  // If p and pVal is found then again start from right most point in arr and find the first value greater than pVal which is 3 and we will find
  // 4. Now swap 4 and 3 and break out of loop

  for (let i = l; i >= 0; i--) {
    if (arr[i] > pVal) {
      swap(arr, p, i);
      break;
    }
  }

  //Now reverse the array from position p+1. That is from the numbers after we found 3 (which got swapped with 4)
  reverse(arr, p + 1, l);
  let res = arr.join("");

  //If res is greater then Max int or lesser than input val then return -1
  if (res > Math.pow(2, 31) || res <= n) return -1;

  return res;
};

function reverse(arr, i, j) {
  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//console.log(nextGreaterElement(2147483486));

const nextGreaterElement = (n) => {
  let arr = Array.from(`${n}`, Number);
  let max = -Infinity,
    idx = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < max) {
      idx = i;
      break;
    }
    max = Math.max(max, arr[i]);
  }
  if (idx === -1) return -1;
  let secondHalf = arr.splice(idx + 1).sort((a, b) => a - b);
  for (let i = 0; i < secondHalf.length; i++)
    if (secondHalf[i] > arr[idx]) {
      [arr[idx], secondHalf[i]] = [secondHalf[i], arr[idx]];
      break;
    }
  let result = +arr.concat(secondHalf).join``;
  let max32BitInt = 2147483647;
  return result > max32BitInt ? -1 : result;
};

console.log(nextGreaterElement1(2147483486));
