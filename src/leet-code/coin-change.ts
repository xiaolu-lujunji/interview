/**
 * @source [322. 零钱兑换](https://leetcode.cn/problems/coin-change/)
 * @tag 动态规划
 */

function coinChange(coins: number[], amount: number): number {
  const dp: number[] = new Array(amount + 1).fill(-1);

  dp[0] = 0;

  for (let currentAmount = 1; currentAmount <= amount; ++currentAmount) {
    let result = Number.MAX_SAFE_INTEGER;
    coins.forEach((coin) => {
      const minCoinNumber =
        currentAmount - coin < 0 ? -1 : dp[currentAmount - coin];
      if (minCoinNumber !== -1) {
        result = Math.min(result, 1 + minCoinNumber);
      }
    });
    dp[currentAmount] = result === Number.MAX_SAFE_INTEGER ? -1 : result;
  }

  return dp[amount];
}

// 递归版本
// const helper = (amount: number) => {
//     if (amount === 0) return 0;
//     if (amount < 0) return -1;
//     let result = Number.MAX_SAFE_INTEGER;
//     coins.forEach(coin => {
//         const minCoinNumber = helper(amount - coin);
//         if (minCoinNumber !== -1) {
//             result = Math.min(result, 1 + minCoinNumber);
//         }
//     })
//     return result === Number.MAX_SAFE_INTEGER ? -1 : result;
// }
// return helper(amount);
