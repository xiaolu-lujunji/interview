/**
 * @description 103. 二叉树的锯齿形层序遍历
 * @see https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/submissions/
 * @tag 广度优先搜索
 */
function zigzagLevelOrder(root: LeetCode.TreeNode | null): number[][] {
  const queue: LeetCode.TreeNode[] = [];
  if (root) queue.push(root);

  const result: number[][] = [];

  let toRight = true;

  while (queue.length > 0) {
    let len = queue.length;
    const values: number[] = [];
    for (let i = 0; i < len; ++i) {
      const node = queue.shift()!;
      toRight ? values.push(node.val) : values.unshift(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(values);
    toRight = !toRight;
  }

  return result;
}
