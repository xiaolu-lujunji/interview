/**
 * @description 341. 扁平化嵌套列表迭代器
 * @see https://leetcode.cn/problems/flatten-nested-list-iterator/
 * @tag 栈
 */

type NestedInteger = LeetCode.NestedInteger;

class NestedIterator {
  private stack: NestedInteger[];
  constructor(nestedList: NestedInteger[]) {
    this.stack = nestedList;
  }

  hasNext(): boolean {
    while (this.stack.length > 0) {
      const top = this.stack[0];
      if (top.isInteger()) return true;
      const nestedList = this.stack.shift()!.getList();
      this.stack.unshift(...nestedList);
    }
    return false;
  }

  next(): number {
    return this.stack.shift()!.getInteger()!;
  }
}
