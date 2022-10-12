//Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * [112. 路径总和](https://leetcode.cn/problems/path-sum/)
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;
  const helper = (root: TreeNode, acc: number) => {
    const newAcc = acc + root.val;
    if (root.left === null && root.right === null) {
      return newAcc === targetSum;
    }
    if (root.left && helper(root.left, newAcc)) return true;
    if (root.right && helper(root.right, newAcc)) return true;
    return false;
  };
  return helper(root, 0);
}
