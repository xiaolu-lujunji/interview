/**
 * @description 79. 单词搜索
 * @see https://leetcode.cn/problems/word-search/
 * @tag 回溯
 */
function exist(board: string[][], word: string): boolean {
  const n = board.length;
  const m = board[0].length;
  let visited = new Array(n).fill(0).map(() => new Array(m).fill(0));

  const search = (i: number, j: number, index: number): boolean => {
    if (i < 0 || i >= n || j < 0 || j >= m) return false;
    if (visited[i][j]) return false;
    if (index === word.length - 1) {
      return board[i][j] === word[index];
    }
    if (board[i][j] !== word[index]) return false;

    visited[i][j] = 1;
    const nextIndex = index + 1;
    const top = search(i - 1, j, nextIndex);
    const right = search(i, j + 1, nextIndex);
    const bottom = search(i + 1, j, nextIndex);
    const left = search(i, j - 1, nextIndex);
    visited[i][j] = 0;
    return top || right || bottom || left;
  };

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (search(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}
