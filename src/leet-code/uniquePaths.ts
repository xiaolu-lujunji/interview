/**
 * @description 62. 不同路径
 * @see https://leetcode.cn/problems/unique-paths/
 * @tag 动态规划 组合数学
 */
function uniquePaths(m: number, n: number): number {
  const dp: number[][] = new Array(m + 1)
    .fill(0)
    .map(() => new Array(n + 1).fill(0));
  dp[m - 1][n - 1] = 1;
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      dp[i][j] += i + 1 < m ? dp[i + 1][j] : 0;
      dp[i][j] += j + 1 < n ? dp[i][j + 1] : 0;
    }
  }
  return dp[0][0];
}
