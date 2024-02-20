class Solution {
  insertAtIndex(arr, sizeOfArray, index, element) {
    // code here
    // arr[index] = element;
    // return arr;
    arr.slice(index, 0, element);
  }
}
