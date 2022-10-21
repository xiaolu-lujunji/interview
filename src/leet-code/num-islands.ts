/**
 * @description 200. 岛屿数量
 * @see https://leetcode.cn/problems/number-of-islands/
 * @tag 深度优先搜索 广度优先搜索 并查集
 */
function numIslands(grid: string[][]): number {
  const rows = grid.length;
  const columns = grid[0].length;

  const walk = (i: number, j: number) => {
    if (grid[i][j] === "0") return;

    grid[i][j] = "0";

    if (i - 1 >= 0) {
      walk(i - 1, j);
    }
    if (j + 1 < columns) {
      walk(i, j + 1);
    }
    if (i + 1 < rows) {
      walk(i + 1, j);
    }
    if (j - 1 >= 0) {
      walk(i, j - 1);
    }
  };

  let result = 0;
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      if (grid[i][j] === "1") result++;
      walk(i, j);
    }
  }

  return result;
}
