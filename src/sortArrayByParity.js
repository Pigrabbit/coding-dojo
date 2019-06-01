/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = (A) => {
    let head = 0
    while (head < A.length) {
        if ((head + A[head]) % 2 === 0) {
            head++
        } else {
            let tmp = A[head]
            A[head] = A[indexOfNextProperElement(A, head)]
            A[indexOfNextProperElement(A, head)] = tmp
        }
    }
    return A
}

const indexOfNextProperElement = (A, index) => {
    for (let i = index + 1; i < A.length; i++) {
        if ((index + A[i]) % 2 === 0) {
            return i
        }
    }
    return -1
}

module.exports = sortArrayByParityII
