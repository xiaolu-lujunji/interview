/**
 * @description 129. 求根节点到叶节点数字之和
 * @see https://leetcode.cn/problems/sum-root-to-leaf-numbers/
 * @tag 深度优先搜索
 */
function sumNumbers(root: LeetCode.TreeNode | null): number {
  if (root === null) return 0;
  const dfs = (root: LeetCode.TreeNode, acc: number) => {
    const newAcc = acc * 10 + root.val;
    if (root.left === null && root.right === null) return newAcc;
    let ret = 0;
    if (root.left) {
      ret += dfs(root.left, newAcc);
    }
    if (root.right) {
      ret += dfs(root.right, newAcc);
    }
    return ret;
  };
  return dfs(root, 0);
}
