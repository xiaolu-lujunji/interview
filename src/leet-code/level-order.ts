/**
 * @source [102. 二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/)
 * @tag 广度优先搜索
 */
function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];

  const result: number[][] = [];
  const queue: TreeNode[] = [root];
  while (queue.length > 0) {
    const values: number[] = [];
    const len = queue.length;
    for (let i = 0; i < len; ++i) {
      const node = queue.shift()!;
      values.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(values);
  }

  return result;
}
