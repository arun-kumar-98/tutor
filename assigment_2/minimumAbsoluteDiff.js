function minimumAbsoluteDifference(arr) {
  //sort the array in ascending order
  arr = arr.sort((a, b) => a - b);

  //set min default value

  const result = [];
  let min = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    min = Math.min(min, arr[i + 1] - arr[i]);
    console.log(min);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] == min) {
      result.push([arr[i], arr[i + 1]]);
    }
  }
  return result;
}

const res = minimumAbsoluteDifference([3, 8, -10, 23, 19, -4, -14, 27]);

console.log(res);
