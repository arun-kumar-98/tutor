// function moveZero(arr) {
//   let index = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[index] = arr[i];
//       index++;
//     }
//   }
//   console.log(index);
//   for (let i = index; i < arr.length; i++) {
//     arr[i] = 0;
//   }
//   return arr;
// }

function moveZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      //swap the non zero element
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
  return arr;
}
console.log(moveZeros([8, 0, 0, 1, 7, 8, 9]));

console.log(moveZeros([0, 0, 5, 6, 0, 2, 0, 3, 4]));
