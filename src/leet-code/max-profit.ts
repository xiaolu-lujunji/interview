/**
 * @source [121. 买卖股票的最佳时机](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)
 * @tag 一次遍历
 */
function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let result = 0;
  for (let i = 1; i < prices.length; ++i) {
    const price = prices[i];
    if (price < minPrice) {
      minPrice = price;
    } else {
      result = Math.max(result, price - minPrice);
    }
  }
  return result;
}
