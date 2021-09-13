const stringFormat = (formatString, args) => {
  let resultString = formatString

  if (!isConvertable(formatString, args)) {
    return 'Number of arguments and positions do not match'
  }

  for (let i = 0; i < args.length; i++) {
    const reg = new RegExp(`\{([${i.toString()}])\}`, 'g')
    resultString = resultString.replace(reg, args[i])
  }

  return resultString
}

const isConvertable = (formatString, args) => {
  const indices = []
  let match = []
  const regex = /\{([^}+])\}/g

  while ((match = regex.exec(formatString)) !== null) {
    indices.push(match.index)
  }

  if (indices.length !== args.length) {
    return false
  }

  return true
}

module.exports = stringFormat
