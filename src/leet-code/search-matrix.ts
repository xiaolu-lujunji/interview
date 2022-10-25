/**
 * @description 240. 搜索二维矩阵 II
 * @see https://leetcode.cn/problems/search-a-2d-matrix-ii/
 * @tag 二分查找
 */
function searchMatrix(matrix: number[][], target: number): boolean {
  const n = matrix.length;
  const m = matrix[0].length;
  let i = 0;
  let j = m - 1;
  while (i <= n - 1 && j >= 0) {
    const number = matrix[i][j];
    if (number === target) return true;
    if (number < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}
