/**
 * @description 695. 岛屿的最大面积
 * @see https://leetcode.cn/problems/max-area-of-island/
 * @tag 深度优先搜索 广度优先搜索
 */
function maxAreaOfIsland(grid: number[][]): number {
  const row = grid.length;
  const column = grid[0].length;

  let result = 0;
  let area = 0;

  const helper = (i: number, j: number) => {
    if (i < 0 || i >= row || j < 0 || j >= column || grid[i][j] === 0) return;
    area++;
    grid[i][j] = 0;
    helper(i - 1, j);
    helper(i, j + 1);
    helper(i + 1, j);
    helper(i, j - 1);
  };

  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < column; ++j) {
      if (grid[i][j] === 1) {
        helper(i, j);
        result = Math.max(result, area);
        area = 0;
      }
    }
  }

  return result;
}
