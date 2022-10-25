/**
 * @description 470. 用 Rand7() 实现 Rand10()
 * @see https://leetcode.cn/problems/implement-rand10-using-rand7/
 * @tag 拒绝采样
 */
function rand10(): number {
  let row: number, col: number, idx: number;
  do {
    // @ts-ignore
    row = rand7();
    // @ts-ignore
    col = rand7();
    idx = col + (row - 1) * 7;
  } while (idx > 40);
  return 1 + ((idx - 1) % 10);
}
