/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  const returnPos = [-1, -1];

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      let left = mid;
      let right = mid;

      while (nums[left - 1] === target && left > 0) {
        left--;
      }

      while (nums[right + 1] === target && right < nums.length - 1) {
        right++;
      }

      returnPos[0] = left;
      returnPos[1] = right;
      break;
    }
  }

  return returnPos;
};

module.exports = searchRange;
