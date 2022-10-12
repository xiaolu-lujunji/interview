/**
 * [53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/)
 */
function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let preSum = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    preSum = Math.max(preSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, preSum);
  }

  return maxSum;
}
