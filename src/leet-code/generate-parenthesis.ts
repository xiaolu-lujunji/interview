/**
 * @source [22. 括号生成](https://leetcode.cn/problems/generate-parentheses/)
 * @tag 递归
 */
function generateParenthesis(n: number): string[] {
  const helper = (n: number) => {
    if (n === 0) return [""];
    const result: string[] = [];
    for (let i = 0; i < n; ++i) {
      for (const left of helper(i)) {
        for (const right of helper(n - i - 1)) {
          result.push("(" + left + ")" + right);
        }
      }
    }
    return result;
  };
  return helper(n);
}
