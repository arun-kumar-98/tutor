// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
var minSetSize = function (arr) {
  arr = arr.sort((a, b) => a - b);

  let count = 1;
  const newArray = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) count++;
    else {
      newArray.push(count);
      count = 1;
    }
  }

  newArray.push(count);
  //sort
  newArray.sort((a, b) => a - b);
  let n = arr.length / 2,
    ans = 0;

  for (let i = newArray.length - 1; n > 0 && i >= 0; i--) {
    ans++;
    n -= newArray[i];
  }
  return ans;
};
const arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7];
console.log(minSetSize(arr));

var minSetSize1 = function (arr) {
  const map = {};
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] ? map[arr[i]]++ : (map[arr[i]] = 1);
  }

  const sortedArrayElementsCounts = Object.values(map).sort((a, b) => b - a);

  for (let i = 0; i < sortedArrayElementsCounts.length; i++) {
    count += sortedArrayElementsCounts[i];
    if (count >= arr.length / 2) return i + 1;
  }
};

// const arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7];
// console.log(minSetSize(arr));
