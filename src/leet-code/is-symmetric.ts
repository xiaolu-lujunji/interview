/**
 * @description 101. 对称二叉树
 * @see https://leetcode.cn/problems/symmetric-tree/
 * @tag 二叉树的遍历
 */
function isSymmetric(root: LeetCode.TreeNode | null): boolean {
  const queue: (LeetCode.TreeNode | null)[] = [];
  queue.push(root!.left);
  queue.push(root!.right);

  while (queue.length > 0) {
    const len = queue.length;

    if (len % 2 !== 0) return false;

    let i = 0;
    let j = len - 1;
    while (i < j) {
      if (
        (queue[i] === null && queue[j] !== null) ||
        (queue[i] !== null && queue[j] === null) ||
        (queue[i] !== null &&
          queue[j] !== null &&
          queue[i]!.val !== queue[j]!.val)
      ) {
        return false;
      }
      i++;
      j--;
    }

    for (let i = 0; i < len; ++i) {
      const node = queue.shift();
      if (node) {
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }

  return true;
}
