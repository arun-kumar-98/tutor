function runningSumOfArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    arr[i] = sum;
  }
  return arr;
}
const result = runningSumOfArray([1, 2, 3, 4]);
console.log(result);

//optimization

const arr = [1, 2, 3, 4];

const res = arr.map((num, i, array) => (array[i] = num + (array[i - 1] ?? 0)));
console.log(res);

//TODO : research about reduce return array
const response = arr.reduce((i, arr) => i + arr ?? 0, []);
response.split(",");
console.log(response);
