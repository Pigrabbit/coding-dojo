/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = n => {
    if (n === 0) {
        return [0]
    }

    const bitArray = []
    for (let i = 0; i < 2 ** n; i++){
        bitArray.push(i)
    }

    const grayCodeArray = bitArray.map(number => {
        return number ^ (number >> 1)
    })

    return grayCodeArray
}

module.exports = grayCode
