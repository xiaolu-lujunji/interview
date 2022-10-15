/**
 * @source [206. 反转链表](https://leetcode.cn/problems/reverse-linked-list/submissions/)
 * @tag 链表
 */
function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null;
  let next: ListNode | null = null;
  while (head) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
}
