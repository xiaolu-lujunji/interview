/**
 * @description 1. 两数之和
 * @see https://leetcode.cn/problems/two-sum/
 * @tag 哈希表
 */
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];
    const other = target - num;
    if (map.has(other)) return [map.get(other)!, i];
    map.set(num, i);
  }

  return [];
}
