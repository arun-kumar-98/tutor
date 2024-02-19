function isArrSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) return false;
  }

  return true;
}

console.log(isArrSorted([8, 12, 23, 25, 30, 2]));
// console.log(isArrSorted(1, 2, 3, 4, -1));
