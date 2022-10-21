/**
 * @description 剑指 Offer 22. 链表中倒数第k个节点
 * @see https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * @tag 两次遍历 快慢指针
 */
function getKthFromEnd(
  head: LeetCode.ListNode | null,
  k: number
): LeetCode.ListNode | null {
  let len = 0;

  let p = head;
  while (p) {
    len++;
    p = p.next;
  }

  let targetIndex = len - k;
  let index = 0;
  while (head) {
    if (index === targetIndex) return head;
    index++;
    head = head.next;
  }

  return null;
}
