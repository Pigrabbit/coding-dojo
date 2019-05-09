const intMax = Math.pow(2, 31)- 1
const intMin = -1 * Math.pow(2, 31)

const reverseInterger = (num) => {
    if (!inRange(num)) {
        return 0
    }

    let result = 0

    if (num < 0) {
        let absNumber = Math.abs(num)
        result = -1 * Number(reverseString(absNumber.toString()))
        return checkOverflow(result)
    }

    result = Number(reverseString(num.toString()))
    return checkOverflow(result)
}

const reverseString = (string) => {
    return string.split("").reverse().join("")
}

const inRange = (num) => {
    if (num > intMax || num < intMin) {
        return false
    }
    return true
}

const checkOverflow = (num) => {
    if (!inRange(num)) {
        return 0
    }
    return num
}

module.exports = reverseInterger