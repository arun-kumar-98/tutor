class Solution {
  merge(arr, l, m, r) {
    // Your code here
    //   finding the length all sub arrays
    let n1 = m - l + 1;
    let n2 = r - m;

    //create left and rigt subarray
    const L = new Array(n1);
    const R = new Array(n2);

    //copying the elements

    for (let i = 0; i < n1; i++) {
      L[i] = arr[l + i];
    }
    for (let j = 0; j < n2; j++) {
      R[j] = arr[m + 1 + j];
    }

    let i = 0,
      j = 0,
      k = l;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }
    //for remaning elements in left array snd right array

    //copy

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }

    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
    console.log("  -------sorted Array----------------");
    console.log(arr);

    //the end delete helping array
  }
  //   merge(arr, l, m, r) {
  //     let n1 = m - l + 1;
  //     let n2 = r - m;

  //     const L = new Array(n1);
  //     const R = new Array(n2);

  //     for (let i = 0; i < n1; i++) {
  //       L[i] = arr[l + i];
  //     }
  //     for (let j = 0; j < n2; j++) {
  //       R[j] = arr[m + 1 + j];
  //     }

  //     let i = 0,
  //       j = 0,
  //       k = l; // Start index of merged subarray in arr[]

  //     while (i < n1 && j < n2) {
  //       if (L[i] <= R[j]) {
  //         arr[k] = L[i];
  //         i++;
  //       } else {
  //         arr[k] = R[j];
  //         j++;
  //       }
  //       k++;
  //     }

  //     while (i < n1) {
  //       arr[k] = L[i];
  //       i++;
  //       k++;
  //     }

  //     while (j < n2) {
  //       arr[k] = R[j];
  //       j++;
  //       k++;
  //     }
  //   }

  mergeSort(arr, l, r) {
    //finding the mid to divide the array into subarrays

    if (l >= r) return;
    let mid = l + Math.floor((r - l) / 2);

    // Call the recursive function
    this.mergeSort(arr, l, mid);
    this.mergeSort(arr, mid + 1, r);
    this.merge(arr, l, mid, r);
  }
}

new Solution().mergeSort([4, 1, 3, 9, 7], 0, 4);
