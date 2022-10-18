/**
 * @source [226. 翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)
 * @tag 递归
 */
function invertTree(root: TreeNode | null): TreeNode | null {
  const helper = (root: TreeNode | null) => {
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
