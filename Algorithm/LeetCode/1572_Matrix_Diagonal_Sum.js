/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i]; //primary
    sum += i == mat.length - 1 - i ? 0 : mat[i][mat.length - 1 - i]; //secondary
  }
  return sum;
};
