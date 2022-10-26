/**
 * @description 64. 最小路径和
 * @see https://leetcode.cn/problems/minimum-path-sum/
 * @tag 动态规划
 */
function minPathSum(grid: number[][]): number {
  const n = grid.length;
  const m = grid[0].length;
  const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));
  for (let i = n - 1; i >= 0; --i) {
    for (let j = m - 1; j >= 0; --j) {
      if (i === n - 1 && j === m - 1) {
        dp[i][j] = grid[i][j];
      } else if (i === n - 1) {
        dp[i][j] = grid[i][j] + dp[i][j + 1];
      } else if (j === m - 1) {
        dp[i][j] = grid[i][j] + dp[i + 1][j];
      } else {
        dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }
  return dp[0][0];
}
