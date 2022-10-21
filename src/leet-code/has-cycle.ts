/**
 * @description 141. 环形链表
 * @see https://leetcode.cn/problems/linked-list-cycle/
 * @tag 快慢指针
 */
function hasCycle(head: LeetCode.ListNode | null): boolean {
  let p1 = head;
  let p2 = head;

  while (p1 && p2) {
    p1 = p1.next;
    p2 = p2.next ? p2.next.next : null;
    if (p1 && p2 && p1 === p2) return true;
  }

  return false;
}
