/**
 * @description 15. 三数之和
 * @see https://leetcode.cn/problems/3sum/
 * @tag 排序 双指针
 */
function threeSum(nums: number[]): number[][] {
  const sortedNums = nums.sort((a, b) => a - b);
  const result: number[][] = [];
  for (let k = 0; k < sortedNums.length; ++k) {
    if (k > 0 && sortedNums[k] === sortedNums[k - 1]) continue;
    let i = k + 1;
    let j = sortedNums.length - 1;
    while (i < j) {
      if (i - 1 > k && sortedNums[i] === sortedNums[i - 1]) {
        i++;
        continue;
      }
      const sum = sortedNums[k] + sortedNums[i] + sortedNums[j];
      if (sum === 0) {
        result.push([sortedNums[k], sortedNums[i], sortedNums[j]]);
        i++;
        j--;
      } else if (sum < 0) {
        i++;
      } else {
        j--;
      }
    }
  }
  return result;
}
