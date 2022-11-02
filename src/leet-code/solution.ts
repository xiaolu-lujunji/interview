/**
 * @description 384. 打乱数组
 * @see https://leetcode.cn/problems/shuffle-an-array/
 * @tag Fisher-Yates 洗牌算法
 */

class Solution {
  private raw: number[];
  private value: number[];
  constructor(nums: number[]) {
    this.raw = nums.slice();
    this.value = nums.slice();
  }

  reset(): number[] {
    this.value = this.raw.slice();
    return this.value;
  }

  shuffle(): number[] {
    for (let i = 0; i < this.value.length; ++i) {
      const j = Math.floor(Math.random() * (this.value.length - i)) + i;
      const temp = this.value[i];
      this.value[i] = this.value[j];
      this.value[j] = temp;
    }
    return this.value;
  }
}
