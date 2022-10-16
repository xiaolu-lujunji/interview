/**
 * @source [54. 螺旋矩阵](https://leetcode.cn/problems/spiral-matrix/)
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
