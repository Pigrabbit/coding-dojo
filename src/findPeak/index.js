/**
  Problem

  A peak element is an element that is strictly greater than its neighbors.
  Given an integer array nums, find a peak element, and return its index. 
  If the array contains multiple peaks, return the index to any of the peaks.

  You may imagine that nums[-1] = nums[n] = -∞.

  You must write an algorithm that runs in O(log n) time.
 */

/**
  Constraints

  - 1 <= nums.length <= 1000
  - -231 <= nums[i] <= 231 - 1
  - nums[i] != nums[i + 1] for all valid i.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export default function findPeakElement(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const middle = start + Math.floor((end - start) / 2);
    if (nums[middle] > nums[middle + 1]) {
      end = middle;
      continue;
    }
    start = middle + 1;
  }

  return start;
}
