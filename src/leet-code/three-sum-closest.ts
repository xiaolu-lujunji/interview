/**
 * @description 16. 最接近的三数之和
 * @see https://leetcode.cn/problems/3sum-closest/
 * @tag 排序+双指针
 */
function threeSumClosest(nums: number[], target: number): number {
  const numbers = nums.sort((a, b) => a - b);
  let minDiff = Number.MAX_SAFE_INTEGER;
  let result = 0;
  for (let i = 0; i < numbers.length; ++i) {
    let l = i + 1;
    let r = numbers.length - 1;
    while (l < r) {
      const sum = numbers[i] + numbers[l] + numbers[r];
      const diff = Math.abs(sum - target);
      if (diff < minDiff) {
        minDiff = diff;
        result = sum;
      }
      if (sum === target) {
        return sum;
      } else if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
  }
  return result;
}
