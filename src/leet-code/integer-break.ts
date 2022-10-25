/**
 * @description 343. 整数拆分
 * @see https://leetcode.cn/problems/integer-break/
 * @tag 动态规划 数学
 */
function integerBreak(n: number): number {
  const dp: number[] = [0, 0];
  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j < i; ++j) {
      dp[i] = Math.max(dp[i] ?? 0, Math.max(j * dp[i - j], j * (i - j)));
    }
  }
  return dp[n];
}
