/**
 * @description 112. 路径总和
 * @see https://leetcode.cn/problems/path-sum/
 * @tag 深度优先搜索
 */
function hasPathSum(
  root: LeetCode.TreeNode | null,
  targetSum: number
): boolean {
  if (root === null) return false;
  const helper = (root: LeetCode.TreeNode, acc: number) => {
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
