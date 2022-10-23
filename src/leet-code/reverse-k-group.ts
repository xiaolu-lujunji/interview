/**
 * @description 25. K 个一组翻转链表
 * @see https://leetcode.cn/problems/reverse-nodes-in-k-group/
 * @tag 链表
 */
function reverseKGroup(
  head: LeetCode.ListNode | null,
  k: number
): LeetCode.ListNode | null {
  const helperNode = new LeetCode.ListNode();

  let previousSectionTail = helperNode;
  let currentSectionHead = head;

  while (true) {
    let i = 0;
    let nextSectionHead = currentSectionHead;
    while (nextSectionHead && i < k) {
      nextSectionHead = nextSectionHead.next;
      i++;
    }
    if (i < k) {
      previousSectionTail.next = currentSectionHead;
      return helperNode.next;
    }

    const currentSectionTail = currentSectionHead;
    let newSectionHead = null;
    while (currentSectionHead !== nextSectionHead) {
      let pointer = currentSectionHead!.next;
      currentSectionHead!.next = newSectionHead;
      newSectionHead = currentSectionHead;
      currentSectionHead = pointer;
    }
    previousSectionTail.next = newSectionHead;
    previousSectionTail = currentSectionTail!;
  }
}
