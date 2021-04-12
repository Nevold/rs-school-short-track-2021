/**
  Given a sorted array, find the index of the element with the given value.
  Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // throw new Error('Not implemented');
  let leftNum = 0;
  let righNum = array.length - 1;

  while (leftNum <= righNum) {
    const center = Math.floor((leftNum + righNum) / 2);
    if (value === array[center]) {
      return center;
    }
    if (value < array[center]) {
      righNum = center - 1;
    } else {
      leftNum = center + 1;
    }
  }
  return 0;
}

module.exports = findIndex;
