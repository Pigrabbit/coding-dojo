/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let current = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    max = Math.max(max, current);
  }

  return max;
};

module.exports = maxSubArray;
