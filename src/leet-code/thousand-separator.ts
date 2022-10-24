/**
 * @description https://leetcode.cn/problems/thousand-separator/
 * @see 1556. 千位分隔数
 * @tag 模拟
 */
function thousandSeparator(n: number): string {
  if (n === 0) return "0";
  let result = "";
  let i = 0;
  while (n > 0) {
    result = (n % 10) + result;
    i++;
    n = Math.floor(n / 10);
    if (n !== 0 && i === 3) {
      result = "." + result;
      i = 0;
    }
  }
  return result;
}
