const findKthLargest = (nums, k) => {
  const sortedArr = nums.sort((a, b) => b - a)
  return sortedArr[k - 1]
}

module.exports = findKthLargest
