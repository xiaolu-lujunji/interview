declare namespace LeetCode {
  //Definition for a binary tree node.
  class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }

  //Definition for singly-linked list.
  class ListNode {
    val: number;
    next: ListNode | null;
  }

  // Definition for node.
  class Node {
    val: number;
    children: Node[];
  }

  // This is the interface that allows for creating nested lists.
  // You should not implement it, or speculate about its implementation
  class NestedInteger {
    //  If value is provided, then it holds a single integer
    //  Otherwise it holds an empty nested list
    public constructor(value?: number);

    //  Return true if this NestedInteger holds a single integer, rather than a nested list.
    public isInteger(): boolean;

    //  Return the single integer that this NestedInteger holds, if it holds a single integer
    //  Return null if this NestedInteger holds a nested list
    public getInteger(): number | null;

    //  Set this NestedInteger to hold a single integer equal to value.
    public setInteger(value: number): void;

    //  Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
    public add(elem: NestedInteger): void;

    //  Return the nested list that this NestedInteger holds,
    //  or an empty list if this NestedInteger holds a single integer
    public getList(): NestedInteger[];
  }
}
