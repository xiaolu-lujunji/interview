/**
 * @source [718. 最长重复子数组](https://leetcode.cn/problems/maximum-length-of-repeated-subarray/submissions/)
 * @tag 动态规划 滑动窗口 二分查找+哈希
 */
function findLength(nums1: number[], nums2: number[]): number {
  let result = -1;

  const dp = new Array(nums1.length + 1)
    .fill(0)
    .map(() => new Array(nums2.length + 1).fill(0));

  for (let i = nums1.length - 1; i >= 0; --i) {
    for (let j = nums2.length - 1; j >= 0; --j) {
      dp[i][j] = nums1[i] === nums2[j] ? 1 + dp[i + 1][j + 1] : 0;
      result = Math.max(result, dp[i][j]);
    }
  }

  return result;
}
