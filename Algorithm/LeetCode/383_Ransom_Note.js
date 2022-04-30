/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomeObj = {}
    for(r of ransomNote){
        ransomeObj[r] ? ransomeObj[r]++ : ransomeObj[r] = 1
    }
    for(m of magazine){
        if(ransomeObj[m])
            ransomeObj[m]--;
    }
    for(i in ransomeObj){
        if(ransomeObj[i] !== 0) return false;
    }
    return true;
};
