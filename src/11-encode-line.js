/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');
  // const counts = {};
  // let key = '';
  // let count = '';
  // let result = '';
  // for (let i = 0; i < str.length; ++i) {
  //   key = str.charAt(i);
  //   count = counts[key];
  //   counts[key] = count ? count + 1 : 1;
  // }

  // Object.entries(counts).forEach(([keys, value]) => {
  //   if (value === 1) {
  //     result += keys;
  //   } else {
  //     result = result + value + keys;
  //   }
  // });
  // return result;
  // решение для  упрощенного случая без последовательности

  let result = '';
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    let j = i + 1;
    while (str[j] === str[i]) {
      count++;
      j++;
    }
    i += count - 1;
    if (count === 1) {
      result += str[i];
    } else {
      result = result + count + str[i];
    }
  }
  return result;
}

module.exports = encodeLine;
