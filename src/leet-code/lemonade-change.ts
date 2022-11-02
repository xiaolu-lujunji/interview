/**
 * @description 860. 柠檬水找零
 * @see https://leetcode.cn/problems/lemonade-change/
 * @tag 贪心
 */
function lemonadeChange(bills: number[]): boolean {
  const change = [0, 0];

  for (const bill of bills) {
    switch (bill) {
      case 5:
        change[0]++;
        break;
      case 10:
        if (change[0] === 0) return false;
        change[0]--;
        change[1]++;
        break;
      case 20:
        if (change[0] >= 1 && change[1] >= 1) {
          change[0] -= 1;
          change[1] -= 1;
        } else if (change[0] >= 3) {
          change[0] -= 3;
        } else {
          return false;
        }
        break;
      default:
        break;
    }
  }

  return true;
}
