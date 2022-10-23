/**
 * @description 54. 螺旋矩阵
 * @see https://leetcode.cn/problems/spiral-matrix/
 * @tag 模拟
 */
function spiralOrder(matrix: number[][]): number[] {
  const visitedLabel = 101;

  const result: number[] = [];

  const rows = matrix.length;
  const columns = matrix[0].length;
  const total = rows * columns;

  let i = 0;
  let j = -1;
  while (true) {
    if (total === result.length) {
      return result;
    }
    while (j + 1 < columns && matrix[i][j + 1] !== visitedLabel) {
      j++;
      result.push(matrix[i][j]);
      matrix[i][j] = visitedLabel;
    }
    while (i + 1 < rows && matrix[i + 1][j] !== visitedLabel) {
      i++;
      result.push(matrix[i][j]);
      matrix[i][j] = visitedLabel;
    }
    while (j - 1 >= 0 && matrix[i][j - 1] !== visitedLabel) {
      j--;
      result.push(matrix[i][j]);
      matrix[i][j] = visitedLabel;
    }
    while (i - 1 >= 0 && matrix[i - 1][j] !== visitedLabel) {
      i--;
      result.push(matrix[i][j]);
      matrix[i][j] = visitedLabel;
    }
  }
}

/**
 * @description 剑指 Offer 29. 顺时针打印矩阵
 * @see https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
 * @tag 模拟
 */
function spiralOrder2(matrix: number[][]): number[] {
  const row = matrix.length;
  const column = matrix[0] ? matrix[0].length : 0;
  const size = row * column;

  const result: number[] = [];

  let i = 0;
  let j = -1;
  while (result.length < size) {
    while (j + 1 < column && !Number.isNaN(matrix[i][j + 1])) {
      result.push(matrix[i][++j]);
      matrix[i][j] = NaN;
    }
    while (i + 1 < row && !Number.isNaN(matrix[i + 1][j])) {
      result.push(matrix[++i][j]);
      matrix[i][j] = NaN;
    }
    while (j - 1 > -1 && !Number.isNaN(matrix[i][j - 1])) {
      result.push(matrix[i][--j]);
      matrix[i][j] = NaN;
    }
    while (i - 1 > -1 && !Number.isNaN(matrix[i - 1][j])) {
      result.push(matrix[--i][j]);
      matrix[i][j] = NaN;
    }
  }

  return result;
}
