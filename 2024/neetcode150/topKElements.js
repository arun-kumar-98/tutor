/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  //1.map for storing the frequnecy
  //2.min_heap
  //3. set the elements in heap
  //4. prepare the result

  const map = new Map();

  for (let num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }
  console.log(map);
  const pq = [];

  for (let [value, freq] of map) {
    //instead of this we can directly extract key and value from the map
    //   for (let m of map) {
    //     let v = m[0];
    //     let f = m[1];

    // console.log("key: ", v, "freq: ", f);

    // pq.push({ freq: f, value: v });
    pq.push({ freq, value });

    // console.log("pq ", pq);
    if (pq.length > k) {
      pq.sort((a, b) => b.freq - a.freq);
      pq.pop();
    }

    // console.log("after pop ", pq);
  }

  const ans = [];

  while (pq.length != 0) {
    ans.push(pq[pq.length - 1].value);
    pq.pop();
    // console.log(" ans storing ", ans);
  }
  console.log("ans ", ans);
  return ans;
};

const nums = [1, 1, 1, 2, 2, 3],
  k = 2;

// [3, 0, 1, 0];
// console.log(topKFrequent(nums, k));

console.log(topKFrequent([3, 0, 1, 0], 1));
