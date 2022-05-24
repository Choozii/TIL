/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let ns = [...s];
  let nt = [...t];
  let p = 0;
  while (nt.length > 1) {
    let idx = nt.indexOf(ns[p]);

    if (idx > -1) {
      nt.splice(idx, 1);
    } else {
      return ns[p].toString();
    }
    p++;
  }
  return nt.toString();
};
