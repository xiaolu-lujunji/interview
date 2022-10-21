/**
 * @description 102. 二叉树的层序遍历
 * @see https://leetcode.cn/problems/binary-tree-level-order-traversal/
 * @tag 广度优先搜索
 */
function levelOrder(root: LeetCode.TreeNode | null): number[][] {
  if (root === null) return [];

  const result: number[][] = [];
  const queue: LeetCode.TreeNode[] = [root];
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

/**
 * @description 429. N 叉树的层序遍历
 * @see https://leetcode.cn/problems/n-ary-tree-level-order-traversal/
 * @tag 广度优先搜索
 */
function levelOrder2(root: LeetCode.Node | null): number[][] {
  const queue: LeetCode.Node[] = [];
  if (root) queue.push(root);

  const result: number[][] = [];

  while (queue.length > 0) {
    const len = queue.length;
    const values: number[] = [];
    for (let i = 0; i < len; ++i) {
      const node = queue.shift()!;
      values.push(node.val);
      node.children.forEach((child) => child && queue.push(child));
    }
    result.push(values);
  }

  return result;
}
