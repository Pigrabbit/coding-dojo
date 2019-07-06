/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = num => {
    let low = 0
    let high = num

    while(low <= high) {
        mid = Math.floor((low + high) / 2)
        
        if (mid * mid === num) {
            return true
        } else if (mid * mid > num) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return false
}

module.exports = isPerfectSquare
