/**
 * @description 230. 二叉搜索树中第K小的元素
 * @see https://leetcode.cn/problems/kth-smallest-element-in-a-bst/
 * @tag 中序遍历 平衡二叉搜索树 记录子树的节点数（频繁查找）
 */
function kthSmallest(root: LeetCode.TreeNode | null, k: number): number {
  let index = 0;

  while (root) {
    if (root.left === null) {
      index++;
      if (index === k) return root.val;
      root = root.right;
    } else {
      let predecessor = root.left;
      while (predecessor.right && predecessor.right !== root) {
        predecessor = predecessor.right;
      }
      if (predecessor.right !== null) {
        index++;
        if (index === k) return root.val;
        predecessor.right = null;
        root = root.right;
      } else {
        predecessor.right = root;
        root = root.left;
      }
    }
  }

  return -1;
}
