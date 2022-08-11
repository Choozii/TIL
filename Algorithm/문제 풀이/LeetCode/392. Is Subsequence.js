/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    //상대적인 위치는 변하지 않고 t에서 몇개의 문자를 제거했을 때 s가 되는지?
    //""와 ""가 들어올 수도
    //아예 같은 문자가 들어올 수도
    //lowercase만 따짐
    //t.length>=s.length여야 함! 
    
    //edge case : 여러 문자가 반복되는 경우
    //abc babc
    
    if(t.length < s.length) return false;
    
    let tIdx = 0, sIdx = 0;
    while(tIdx < t.length && sIdx<s.length){
        if(s[sIdx] === t[tIdx]){
            sIdx++;
        }
        tIdx++;
    }
    if(sIdx === s.length) return true;
    return false;
};