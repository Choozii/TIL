/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const check_order = (str1, str2) => {
    //str1이 str2보다 빠른 사전 순서를 가진다면 true 리턴
    let p1 = 0,
      p2 = 0;

    while (p1 !== str1.length && p2 !== str2.length) {
      const s1 = str1[p1++];
      const s2 = str2[p2++];
      if (order.indexOf(s1) == order.indexOf(s2)) continue;

      return order.indexOf(s1) < order.indexOf(s2) ? true : false;
    }
    if (p1 !== str1.length) return false;
    return true;
  };

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (!check_order(words[i], words[j])) {
        console.log(words[i], words[j]);
        return false;
      }
    }
  }
  return true;
};
