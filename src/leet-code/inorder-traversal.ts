/**
 * @description 94. 二叉树的中序遍历
 * @see https://leetcode.cn/problems/binary-tree-inorder-traversal/
 * @tag morris中序遍历
 */
function inorderTraversal(root: LeetCode.TreeNode | null): number[] {
  const results: number[] = [];

  let x = root;
  while (x !== null) {
    if (x.left === null) {
      results.push(x.val);
      x = x.right;
    } else {
      let predecessor = x.left;
      while (predecessor.right !== null && predecessor.right !== x) {
        predecessor = predecessor.right;
      }
      if (predecessor.right === null) {
        predecessor.right = x;
        x = x.left;
      } else {
        predecessor.right = null;
        results.push(x.val);
        x = x.right;
      }
    }
  }

  return results;
}
