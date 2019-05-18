const maxArea = (heights) => {
    let area = []

    for (let i = 0; i < heights.length; i++) {
        let width = 1
        let height = heights[i]
        let tmp = heights.filter(element => element >= heights[i])
        if (tmp.length) {
            let widths = []
            tmp.forEach(element => {
                let possibleWidth1 = Math.abs(heights.indexOf(element) - i)
                let possibleWidth2 = Math.abs(heights.lastIndexOf(element) - i)
                if (possibleWidth1 === possibleWidth2) {
                    widths.push(Math.abs(possibleWidth1))
                } else {
                    widths.push(Math.max(possibleWidth1, possibleWidth2))
                }
            })
            width = Math.max(...widths)
        }
        area.push(width * height)
    }

    return Math.max(...area)
}

module.exports = maxArea
