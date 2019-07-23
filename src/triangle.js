/**
 * @param {number[][]} triangle
 * @return {number}
 */

const minimumTotal = (triangle) => {
  for (let i = triangle.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      triangle[i - 1][j] = triangle[i - 1][j] + Math.min(triangle[i][j], triangle[i][j + 1]);
    }
  }

  return triangle[0][0];
};

module.exports = minimumTotal;
