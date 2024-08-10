var merge = function (nums1, m, nums2, n) {
  let k = m + n;
  console.log(k);
  const ans = new Array({ length: k - 1 }).fill(0);
  for (let num of nums1) {
    ans.push(num);
  }

  for (let i of nums2) {
    ans.push(i);
  }

  console.log(ans);
};
let nums1 = [1, 2, 3],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

merge(nums1, m, nums2, n);
