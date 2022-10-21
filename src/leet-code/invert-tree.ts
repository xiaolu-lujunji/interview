/**
 * @description 226. 翻转二叉树
 * @see https://leetcode.cn/problems/invert-binary-tree/
 * @tag 递归
 */
function invertTree(root: LeetCode.TreeNode | null): LeetCode.TreeNode | null {
  const helper = (root: LeetCode.TreeNode | null) => {
    if (root === null) return;
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    helper(root.left);
    helper(root.right);
  };
  helper(root);
  return root;
}
