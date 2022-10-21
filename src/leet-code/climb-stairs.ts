/**
 * @description 70. 爬楼梯
 * @see https://leetcode.cn/problems/climbing-stairs/
 * @tag 动态规划 矩阵快速幂 通项公式
 */
function climbStairs(n: number): number {
  const state: number[] = [1];

  for (let i = 1; i <= n; ++i) {
    state[i] = state[i - 1] + (i - 2 < 0 ? 0 : state[i - 2]);
  }

  return state[n];
}
