/**
 * @description 209. 长度最小的子数组
 * @see https://leetcode.cn/problems/minimum-size-subarray-sum/
 * @tag 滑动窗口
 */
function minSubArrayLen(target: number, nums: number[]): number {
  let i = 0;
  let j = 0;
  let result = nums.length + 1;
  let sum = 0;
  while (j < nums.length) {
    while (j < nums.length && sum < target) {
      sum += nums[j];
      j++;
    }
    while (i < nums.length && sum >= target) {
      result = Math.min(result, j - i);
      sum -= nums[i];
      i++;
    }
  }
  return result === nums.length + 1 ? 0 : result;
}
