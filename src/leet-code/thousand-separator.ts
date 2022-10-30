/**
 * @description https://leetcode.cn/problems/thousand-separator/
 * @see 1556. 千位分隔数
 * @tag 模拟
 */
function thousandSeparator(n: number): string {
  let result = "";
  let i = 0;
  do {
    const unitDigit = n % 10;
    result = (i !== 0 && i % 3 === 0 ? "." : "") + result;
    result = unitDigit + result;
    n = Math.floor(n / 10);
    i++;
  } while (n > 0);
  return result;
}
