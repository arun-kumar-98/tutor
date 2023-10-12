/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */

//above code is more readable
//but leet code is leads TLE
var findInMountainArray = function (target, mountainArr) {
  const n = mountainArr.length();
  let idx = peakIndexInMountainArray(mountainArr);

  //check element for till peak element

  let result_idx = binarySearch(mountainArr, 0, idx, target);
  //if result_idx==-1 return
  if (result_idx != -1) {
    return result_idx;
  }

  ///check element in after peak element

  result_idx = reverseBinarySearch(mountainArr, idx + 1, n);
  //then finally return result_idx
  return result_idx;
};

//find peak element

function peakIndexInMountainArray(mountainArr) {
  let n = mountainArr.length();
  let l = 0;
  let r = n - 1;

  while (l < r) {
    // calculate mid

    let mid = l + Math.floor((r - l) / 2);

    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}

function binarySearch(mountainArr, left, right, target) {
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mountainArr.get(mid) === target) {
      return mid;
    } else if (mountainArr.get(mid) > target) {
      left = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

//reverse binary search

function reverseBinarySearch(mountainArr, left, right, target) {
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mountainArr.get(mid) === target) {
      return mid;
    } else if (mountainArr.get(mid) > target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

//successful code
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  const n = mountainArr.length();

  function peakIndexInMountainArray() {
    let l = 0;
    let r = n - 1;

    while (l < r) {
      let mid = Math.floor((l + r) / 2);

      if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    return l;
  }

  function binarySearch(left, right, target) {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (mountainArr.get(mid) === target) {
        return mid;
      } else if (mountainArr.get(mid) > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  }

  function reverseBinarySearch(left, right, target) {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (mountainArr.get(mid) === target) {
        return mid;
      } else if (mountainArr.get(mid) > target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  let peakIndex = peakIndexInMountainArray();

  let resultIndex = binarySearch(0, peakIndex, target);

  if (resultIndex !== -1) {
    return resultIndex;
  }

  resultIndex = reverseBinarySearch(peakIndex + 1, n - 1, target);

  return resultIndex;
};

// var findInMountainArray = function (target, mountainArr) {
//     const n = mountainArr.length();

//     function peakIndexInMountainArray() {
//         let l = 0;
//         let r = n - 1;

//         while (l < r) {
//             let mid = l + Math.floor((r - l) / 2);

//             if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
//                 l = mid + 1;
//             } else {
//                 r = mid;
//             }
//         }
//         return l;
//     }

//     function binarySearch(left, right, target) {
//         while (left <= right) {
//             let mid = left + Math.floor((right - left) / 2);

//             if (mountainArr.get(mid) === target) {
//                 return mid;
//             } else if (mountainArr.get(mid) > target) {
//                 right = mid - 1;
//             } else {
//                 left = mid + 1;
//             }
//         }
//         return -1;
//     }

//     function reverseBinarySearch(left, right, target) {
//         while (left <= right) {
//             let mid = left + Math.floor((right - left) / 2);

//             if (mountainArr.get(mid) === target) {
//                 return mid;
//             } else if (mountainArr.get(mid) > target) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//         return -1;
//     }

//     let peakIndex = peakIndexInMountainArray();

//     let resultIndex = binarySearch(0, peakIndex, target);

//     if (resultIndex !== -1) {
//         return resultIndex;
//     }

//     resultIndex = reverseBinarySearch(peakIndex, n - 1, target);

//     return resultIndex;
// };
