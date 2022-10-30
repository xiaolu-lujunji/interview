/**
 * @description 6220. 可被三整除的偶数的平均值
 * @see https://leetcode.cn/problems/average-value-of-even-numbers-that-are-divisible-by-three/
 * @tag 简单模拟
 */
function averageValue(nums: number[]): number {
  let sum = 0;
  let amount = 0;
  for (const num of nums) {
    if (num % 6 === 0) {
      sum += num;
      amount++;
    }
  }
  return amount === 0 ? 0 : Math.floor(sum / amount);
}
