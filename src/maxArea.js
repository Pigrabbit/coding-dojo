const maxArea = (heights) => {
  let max = 0
  let head = 0
  let tail = heights.length - 1

  while (head < tail) {
    const tmp = Math.min(heights[head], heights[tail]) * (tail - head)
    max = Math.max(max, tmp)

    if (heights[head] < heights[tail]) {
      head++
    } else {
      tail--
    }
  }

  return max
}

module.exports = maxArea
