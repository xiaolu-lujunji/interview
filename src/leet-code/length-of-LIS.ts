/**
 * @source [300. 最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence)
 * @tag 动态规划
 */
export default function lengthOfLIS(nums: number[]): number {
  let result = 1;
  const lengthOfLISArr: number[] = [1];
  for (let i = 1; i < nums.length; ++i) {
    const currentNum = nums[i];
    let maxLengthOfLIS = 0;
    for (let j = i - 1; j >= 0; --j) {
      if (currentNum > nums[j] && maxLengthOfLIS < lengthOfLISArr[j]) {
        maxLengthOfLIS = lengthOfLISArr[j];
      }
    }
    lengthOfLISArr[i] = maxLengthOfLIS + 1;
    if (lengthOfLISArr[i] > result) result = lengthOfLISArr[i];
  }
  return result;
}
