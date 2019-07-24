/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = (nums) => {
  const sortedNumbers = divideBySign(nums)

  const { negatives } = sortedNumbers
  const { zeros } = sortedNumbers
  const { positives } = sortedNumbers

  const threeSumSets = []

  if (zeros.length > 0) {
    negatives.forEach((num) => {
      const hasPositivePair = positives.includes(Math.abs(num))
      if (hasPositivePair) {
        const indexOfPair = positives.indexOf(Math.abs(num))
        threeSumSets.push([num, 0, positives[indexOfPair]])
      }
    })
  }
  // two negatives and positive case
  if (negatives.length > 1) {
    const negativeSets = makeSets(negatives)
    negativeSets.forEach((set) => {
      const threeSumSet = getThreeSumSet(set, positives)
      if (threeSumSet) {
        threeSumSets.push(threeSumSet)
      }
    })
  }
  // one negative and two positive case
  if (positives.length > 1) {
    const positiveSets = makeSets(positives)
    positiveSets.forEach((set) => {
      const threeSumSet = getThreeSumSet(set, negatives)
      if (threeSumSet) {
        threeSumSets.push(threeSumSet)
      }
    })
  }

  return threeSumSets
}

const getThreeSumSet = (twoNumSet, oppositeNums) => {
  let sum = 0
  twoNumSet.forEach(num => sum += num)
  const newThreeSumSet = []

  const hasOppositePair = oppositeNums.includes(-1 * sum)
  if (hasOppositePair) {
    const indexOfPair = oppositeNums.indexOf(-1 * sum)
    twoNumSet.forEach(num => newThreeSumSet.push(num))
    newThreeSumSet.push(oppositeNums[indexOfPair])

    return newThreeSumSet
  }
}

const divideBySign = (nums) => {
  const negatives = nums.filter(num => num < 0)
  const zeros = nums.filter(num => num === 0)
  const positives = nums.filter(num => num > 0)

  return {
    negatives,
    zeros,
    positives,
  }
}

const makeSets = (nums) => {
  const pairs = []

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      pairs.push([nums[i], nums[j]])
    }
  }

  return pairs
}

module.exports = threeSum
