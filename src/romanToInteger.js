const romanToInteger = (romanNum) => {
  const dictionary = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  }

  let i = romanNum.length - 1
  let result = dictionary[romanNum[i]]

  for (i; i > 0; i--) {
    const current = dictionary[romanNum[i]]
    const prev = dictionary[romanNum[i - 1]]

    if (prev >= current) {
      result += prev
    } else {
      result -= prev
    }
  }

  return result
}

module.exports = romanToInteger
