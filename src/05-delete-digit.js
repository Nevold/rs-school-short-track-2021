/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const count = String(n).split('');
  const min = Math.min(...String(n));
  const index = count.indexOf(String(min));
  count.splice(index, 1);
  return +count.join('');
}

module.exports = deleteDigit;
