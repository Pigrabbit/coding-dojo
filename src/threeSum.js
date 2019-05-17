/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = (nums) => {
    let sortedNumbers = divideBySign(nums)

    const negatives = sortedNumbers['negatives']
    const zeros = sortedNumbers['zeros']
    const positives = sortedNumbers['positives']

    let threeSumSets = []

    if (zeros.length > 0) {
        negatives.forEach((num) => {
            let hasPositivePair = positives.includes(Math.abs(num))
            if (hasPositivePair) {
                let indexOfPair = positives.indexOf(Math.abs(num))
                threeSumSets.push([num, 0 , positives[indexOfPair]])
            }
        })
    }
    // two negatives and positive case
    if (negatives.length > 1) {
        let negativeSets = makeSets(negatives)
        negativeSets.forEach((set) => {
            let threeSumSet = getThreeSumSet(set, positives)
            if (threeSumSet) {
                threeSumSets.push(threeSumSet)
            }
        })
    }
    // one negative and two positive case
    if (positives.length > 1) {
        let positiveSets = makeSets(positives)
        positiveSets.forEach((set) => {
            let threeSumSet = getThreeSumSet(set, negatives)
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
    let newThreeSumSet = []

    let hasOppositePair = oppositeNums.includes(-1 * sum)
    if (hasOppositePair) {
        let indexOfPair = oppositeNums.indexOf(-1 * sum)
        twoNumSet.forEach(num => newThreeSumSet.push(num))
        newThreeSumSet.push(oppositeNums[indexOfPair])

        return newThreeSumSet
    }
}

const divideBySign = (nums) => {
    let negatives = nums.filter(num => num < 0)
    let zeros = nums.filter(num => num === 0)
    let positives = nums.filter(num => num > 0)

    return {
        negatives: negatives,
        zeros: zeros,
        positives: positives
    }
}

const makeSets = (nums) => {
    let pairs = []

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j ++) {
            pairs.push([nums[i], nums[j]])
        }
    }

    return pairs
}

module.exports = threeSum
