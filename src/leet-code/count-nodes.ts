/**
 * @description 222. 完全二叉树的节点个数
 * @see https://leetcode.cn/problems/count-complete-tree-nodes/
 * @tag 完全二叉树 二分查找 位运算
 */
function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;

  const isExist = (root: TreeNode | null, path: number, depth: number) => {
    let binaryNumber = 1 << (depth - 2);
    let node = root;
    while (node && binaryNumber > 0) {
      if ((path & binaryNumber) > 0) {
        node = node.right;
      } else {
        node = node.left;
      }
      binaryNumber >>= 1;
    }
    return node !== null;
  };

  let depth = 0;
  let node: TreeNode | null = root;
  while (node) {
    node = node.left;
    depth++;
  }

  let left = 1 << (depth - 1);
  let right = (1 << depth) - 1;
  while (left < right) {
    const middle = left + Math.floor((right - left + 1) / 2);
    if (isExist(root, middle, depth)) {
      left = middle;
    } else {
      right = middle - 1;
    }
  }

  return left;
}
