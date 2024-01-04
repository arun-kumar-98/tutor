//============================Javascript========================================================

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  // Map to store frequency of every element
  let result = 0;
  const map = new Map();

  // Store frequency of each element in the map
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  // Checking if the after division frequency is
  for (const freq of map.values()) {
    if (freq === 1) {
      return -1; // Min number of operations to make the array empty
    }
    result += Math.ceil(freq / 3);
  }

  return result;
};

//================================================typescript=====================================================
/**
 *
 * typescript solution
 *
 *
 *   **Time Complexity** :O(n)
 *
 *    ** Space Complexity** :O(n)
 */

function minOperations(nums: number[]): number {
  const map: any = new Map();
  let result: any = 0;

  for (let num of nums) {
    map.set(num, ~~map.get(num) + 1);
  }

  for (let freq of map.values()) {
    if (freq === 1) {
      return -1;
    }
    result += Math.ceil(freq / 3);
  }
  return result;
}

const nums = [2, 3, 3, 2, 2, 4, 2, 3, 4];
console.log(minOperations(nums));
const nums1 = [2, 1, 2, 2, 3, 3];

console.log(minOperations(nums1));
