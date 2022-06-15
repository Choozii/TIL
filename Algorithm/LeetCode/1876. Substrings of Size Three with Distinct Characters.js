/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  if (s.length < 3) return 0;
  let count = 0;
  const isGoodString = str => {
    for (let i = 0; i < str.length - 1; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] == str[j]) return false;
      }
    }
    return true;
  };

  for (let i = 0; i < s.length - 2; i++) {
    let substr = s.substring(i, i + 3);
    if (isGoodString(substr)) count++;
  }
  return count;
};
