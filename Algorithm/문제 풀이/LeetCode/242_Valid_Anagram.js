/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const char={};
    for(el of s){
        char[el] ? char[el]++ : char[el] = 1;
    }
    for(el of t){
        if(!char[el]) return false;
        char[el]--;
    }
    for(let i=0;i<s.length;i++){
        if(char[s[i]]!=0) return false;
    }
    return true;
};
