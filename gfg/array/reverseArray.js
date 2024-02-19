//with auxiliary space

// Time & Space :: O(n)& O(n)

function reverseArray(arr) {
  let n = arr.length;
  if (n == 0) return [];
  if (n == 1) return [arr[0]];
  const ans = [];
  for (let i = n - 1; i >= 0; i--) {
    ans.push(arr[i]);
  }
  return ans;
}

// without extra space
function reverseArr(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    [arr[low], arr[high]] = [arr[high], arr[low]];
    low++;
    high--;
  }
  return arr;
}

//built in function

function reverseArrbuilt(arr) {
  let reverse = arr.reverse();
  return reverse;
}

// console.log(reverseArray([30, 20, 10, 5]));
// console.log(reverseArr([30, 20, 10, 5]));
console.log(reverseArrbuilt([30, 20, 10, 5]));
