/**
 * [20. 有效的括号](https://leetcode.cn/problems/valid-parentheses)
 */
function isValid(s: string): boolean {
  // 注意到有效字符串的长度一定为偶数，因此如果字符串的长度为奇数，我们可以直接返回 \text{False}False，省去后续的遍历判断过程。
  if (s.length % 2 === 1) {
    return false;
  }

  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  const stack: string[] = [];
  for (let i = 0; i < s.length; ++i) {
    if (map.has(s[i])) {
      if (stack[stack.length - 1] === map.get(s[i])) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
}
