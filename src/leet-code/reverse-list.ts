/**
 * @description 206. 反转链表
 * @see https://leetcode.cn/problems/reverse-linked-list/submissions/
 * @tag 链表
 */
function reverseList(head: LeetCode.ListNode | null): LeetCode.ListNode | null {
  let pre: LeetCode.ListNode | null = null;
  let next: LeetCode.ListNode | null = null;
  while (head) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
}
