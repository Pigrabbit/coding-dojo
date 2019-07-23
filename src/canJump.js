/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  let maxJumpDistance = nums[0];

  for (let index = 1; index < nums.length; index++) {
    if (maxJumpDistance < index) {
      return false;
    }

    maxJumpDistance = Math.max(maxJumpDistance, nums[index] + index);
  }

  return true;
};

module.exports = canJump;
