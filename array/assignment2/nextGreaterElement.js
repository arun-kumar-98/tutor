/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//BRUTE- FORCE
//================
// var nextGreaterElement = function (nums1, nums2) {
//   const ans = [];
//   for (let i = 0; i < nums1.length; i++) {
//     let maxElement = -1;
//     for (let j = 0; j < nums2.length; j++) {
//       let index = j;
//       if (nums1[i] == nums2[j]) {
//         while (index !== nums2.length) {
//           if (nums2[index] > nums1[i]) {
//             maxElement = nums2[index];
//             break;
//           }
//           index++;
//         }
//       }
//     }
//     ans.push(maxElement);
//   }
//   return ans;
// };
// const nums1 = [4, 1, 2],
//   nums2 = [1, 3, 4, 2];
// console.log(nextGreaterElement(nums1, nums2));

// const nums_1 = [2, 4],
//   nums_2 = [1, 2, 3, 4];
// console.log(nextGreaterElement(nums_1, nums_2));

var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const stack = [];

  //iterate nums2  nums1 subset of nums2

  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1;
  }

  return nums1;
};

// const nums1 = [4, 1, 2],
//   nums2 = [1, 3, 4, 2];
// console.log(nextGreaterElement(nums1, nums2));

// const nums_1 = [2, 4],
//   nums_2 = [1, 2, 3, 4];
// console.log(nextGreaterElement(nums_1, nums_2));

var nextGreaterElement = function (nums1, nums2) {
  const hash = {};
  const stack = [];

  nums2.forEach((item) => {
    //if stack empty then put nums2 elements inside stack
    if (!stack.length) {
      stack.push(item);
      return;
    }
    //check if stack empty or top element in stack is less than current element
    while (stack.length && stack[stack.length - 1] < item) {
      //remove element and assign new element at top
      hash[stack.pop()] = item;
    }
    //push in stack
    stack.push(item);
  });
  //assing -1 to last element remaining in stack
  stack.forEach((item) => (hash[item] = -1));
  // check the elements exists in nums1 and hash map
  return nums1.map((item) => hash[item]);
};

const nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));

const nums_1 = [2, 4],
  nums_2 = [1, 2, 3, 4];
console.log(nextGreaterElement(nums_1, nums_2));
