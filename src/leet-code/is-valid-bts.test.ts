import isValidBST from "./is-valid-bst";

describe("isValidBTS", () => {
  test("测试用例 1", () => {
    const tree: TreeNode = {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    };
    expect(isValidBST(tree)).toBe(true);
  });
});
