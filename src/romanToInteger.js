const romanToInteger = (romanNum) => {
  let returnInteger = 0
  const romanArray = romanNum.split('')

  while (romanArray.length) {
    const leftMostRoman = romanArray.shift()

    switch (leftMostRoman) {
      case 'M':
        returnInteger += 1000
        break
      case 'D':
        returnInteger += 500
        break
      case 'C':
        if (romanArray[0] === 'M') {
          returnInteger += 900
          romanArray.shift()
        } else if (romanArray[0] === 'D') {
          returnInteger += 400
          romanArray.shift()
        } else {
          returnInteger += 100
        }
        break
      case 'L':
        returnInteger += 50
        break
      case 'X':
        if (romanArray[0] === 'C') {
          returnInteger += 90
          romanArray.shift()
        } else if (romanArray[0] === 'L') {
          returnInteger += 40
          romanArray.shift()
        } else {
          returnInteger += 10
        }
        break
      case 'V':
        returnInteger += 5
        break
      case 'I':
        if (romanArray[0] === 'X') {
          returnInteger += 9
          romanArray.shift()
        } else if (romanArray[0] === 'V') {
          returnInteger += 4
          romanArray.shift()
        } else {
          returnInteger += 1
        }
        break
    }
  }

  return returnInteger
}


module.exports = romanToInteger
