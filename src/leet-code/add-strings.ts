/**
 * @description 415. 字符串相加
 * @see https://leetcode.cn/problems/add-strings/
 * @tag 模拟
 */
function addStrings(num1: string, num2: string): string {
  let result = "";
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;
  while (i >= 0 || j >= 0 || carry === 1) {
    const number1 = i >= 0 ? num1.charCodeAt(i) - "0".charCodeAt(0) : 0;
    const number2 = j >= 0 ? num2.charCodeAt(j) - "0".charCodeAt(0) : 0;
    let sum = number1 + number2 + carry;
    carry = 0;
    if (sum >= 10) {
      carry = 1;
      sum = sum % 10;
    }
    result = sum + result;
    i--;
    j--;
  }
  return result;
}
