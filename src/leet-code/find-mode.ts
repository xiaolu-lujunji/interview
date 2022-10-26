type TreeNode = LeetCode.TreeNode;

/**
 * @description 501. 二叉搜索树中的众数
 * @see https://leetcode.cn/problems/find-mode-in-binary-search-tree/
 * @tag 中序遍历
 */
function findMode(root: TreeNode | null): number[] {
  let result: number[] = [];
  let previousValue: number | undefined;
  let times = 0;
  let maxTimes = 0;

  const record = (value: number) => {
    previousValue === value ? times++ : (times = 1);
    if (times > maxTimes) {
      maxTimes = times;
      result = [];
      result.push(value);
    } else if (times === maxTimes) {
      result.push(value);
    }
    previousValue = value;
  };

  let x = root;
  while (x) {
    if (!x.left) {
      record(x.val);
      x = x.right;
    } else {
      let predecessor = x.left;
      while (predecessor.right && predecessor.right !== x) {
        predecessor = predecessor.right;
      }
      if (predecessor.right === x) {
        record(x.val);
        predecessor.right = null;
        x = x.right;
      } else {
        predecessor.right = x;
        x = x.left;
      }
    }
  }

  return result;
}
