/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  const a_z = 'abcdefghi';
  const j_z = 'jklmnopqrstuvwxyz';
  const matched = {};
  const ans = [];
  for (let i = 0; i < a_z.length; i++) {
    matched[`${i + 1}`] = a_z[i];
  }
  for (let i = 0; i < j_z.length; i++) {
    matched[`${i + 10}#`] = j_z[i];
  }

  let i = 0;
  while (i < s.length) {
    if (s[i + 2] == '#') {
      ans.push(matched[s.slice(i, i + 3)]);
      i = i + 3;
    } else {
      ans.push(matched[s[i]]);
      i++;
    }
  }
  return ans.join('');
};
