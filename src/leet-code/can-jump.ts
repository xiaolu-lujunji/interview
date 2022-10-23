/**
 * @description 55. 跳跃游戏
 * @see https://leetcode.cn/problems/jump-game/
 * @tag 贪心
 */
function canJump(nums: number[]): boolean {
  let farestIndex = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (i <= farestIndex) {
      farestIndex = Math.max(farestIndex, i + nums[i]);
      if (farestIndex >= nums.length - 1) return true;
    } else {
      return false;
    }
  }
  return false;
}
