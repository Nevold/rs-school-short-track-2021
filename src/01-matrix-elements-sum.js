/**
  Given matrix, a rectangular matrix of integers,
  just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new Error('Not implemented');
  let result = 0;
  matrix.map((elem, index) => elem.map((e, i) => {
    if (matrix[index - 1] !== undefined) {
      if (matrix[index - 1][i] !== 0) {
        result += e;
      }
    } else {
      result += e;
    }
    return result;
  }));
  return result;
}

module.exports = getMatrixElementsSum;
