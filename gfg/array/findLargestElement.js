function findLargest(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return arr[i];
    }
  }
  return -1;
}
// sort the array and return last indexed data
//Using sort()

function findLargestSort(arr) {
  arr.sort((a, b) => a - b);
  //   console.log(arr)[arr.length - 1];
  return arr[arr.length - 1];
}

console.log(findLargest([1, 23, 43, 45, 55, 4, 5, 10]));
// console.log(
//   findLargestSort([
//     1, 23, 43, 45, 55, 4, 5, 10, 60, 80, 100, 120, 130, 300, 200
//   ])
// );
