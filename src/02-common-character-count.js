/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new Error('Not implemented');
  const objS1 = {};
  const objS2 = {};
  let key = '';
  let count = '';
  let result = 0;
  for (let i = 0; i < s1.length; i++) {
    key = s1.charAt(i);
    count = objS1[key];
    objS1[key] = count ? count + 1 : 1;
  }
  for (let i = 0; i < s2.length; i++) {
    key = s2.charAt(i);
    count = objS2[key];
    objS2[key] = count ? count + 1 : 1;
  }
  Object.keys(objS1).forEach((keys) => {
    if (objS2[keys] !== undefined) {
      if (objS1[keys] < objS2[keys]) {
        result += objS1[keys];
      } else {
        result += objS2[keys];
      }
    }
  });
  return result;
}

module.exports = getCommonCharacterCount;
