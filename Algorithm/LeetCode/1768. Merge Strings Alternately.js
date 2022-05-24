/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let p = 0;
  let ans = [];
  while (p != word1.length && p != word2.length) {
    ans.push(word1[p], word2[p]);
    p++;
  }

  if (p !== word1.length) ans.push(word1.slice(p));
  if (p !== word2.length) ans.push(word2.slice(p));

  return ans.join('');
};
