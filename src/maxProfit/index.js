/**
  Problem
 
  You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
  On each day, you may decide to buy and/or sell the stock. 
  You can only hold at most one share of the stock at any time. 
  However, you can buy it then immediately sell it on the same day.
  
  Find and return the maximum profit you can achieve.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
export default function maxProfit(prices) {
  if (prices.length === 1) return 0;
  let result = 0;

  for (let i = 1; i < prices.length; i += 1) {
    const difference = prices[i] - prices[i - 1];
    if (difference > 0) {
      result += difference;
    }
  }

  return result;
}