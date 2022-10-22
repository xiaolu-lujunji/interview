/**
 * @description 2. 两数相加
 * @see https://leetcode.cn/problems/add-two-numbers/
 * @tag 模拟
 */
function addTwoNumbers(
  l1: LeetCode.ListNode | null,
  l2: LeetCode.ListNode | null
): LeetCode.ListNode | null {
  let number1 = l1;
  let number2 = l2;

  const result = new LeetCode.ListNode();
  let number3 = result;
  let pre: LeetCode.ListNode | null = null;

  let carry = 0;

  while (number1 || number2) {
    const sum =
      (number1 ? number1.val : 0) + (number2 ? number2.val : 0) + carry;
    number3.val = sum % 10;
    carry = Math.trunc(sum / 10);

    const next = new LeetCode.ListNode();
    number3.next = next;
    pre = number3;
    number3 = next;

    number1 = number1 ? number1.next : null;
    number2 = number2 ? number2.next : null;
  }
  if (carry === 1) {
    number3.val = 1;
  } else {
    pre!.next = null;
  }

  return result;
}
