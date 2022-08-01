/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack.length < needle.length) return -1;
  else if (haystack.length == needle.length) return haystack === needle ? 0 : -1;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    const sub = haystack.substring(i, i + needle.length);
    if (sub === needle) return i;
  }
  return -1;
};
