/**
 * @description 104. 二叉树的最大深度
 * @see https://leetcode.cn/problems/maximum-depth-of-binary-tree/
 * @tag 广度优先搜索 深度优先搜索
 */
function maxDepth(root: LeetCode.TreeNode | null): number {
  const queue: LeetCode.TreeNode[] = [];
  if (root) queue.push(root);
  let depth = 0;
  while (queue.length > 0) {
    depth++;
    const len = queue.length;
    for (let i = 0; i < len; ++i) {
      const node = queue.shift()!;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return depth;
}
