export default function isValidBST(root: TreeNode | null): boolean {
  let preVal: number | undefined;

  while (root) {
    if (!root.left) {
      if (preVal !== undefined && preVal >= root.val) return false;
      preVal = root.val;

      root = root.right;
    } else {
      let predecessor = root.left;
      while (predecessor.right && predecessor.right !== root) {
        predecessor = predecessor.right;
      }
      if (predecessor.right) {
        root = root.right;
        predecessor.right = null;

        if (preVal !== undefined && preVal >= root!.val) return false;
        preVal = root!.val;
      } else {
        predecessor.right = root;
        root = root.left;
      }
    }
  }

  return true;
}
