import findKthLargest from "./find-kth-largest";

describe("215. 数组中的第K个最大元素", () => {
  test("测试用例 1", () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });
});
