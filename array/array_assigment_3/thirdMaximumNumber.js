var maxNumber = function (arr) {
  arr = [...new Set(arr)].sort((a, b) => b - a);
  console.log(arr);
  if (arr.length < 3) return arr[0];
  return arr[2];
};

const arr = [2, 3, 4, 5, 6, 7, 7, 8, 7, 11, 12, 8, 7, 17, 16, 9];
console.log(maxNumber(arr));
