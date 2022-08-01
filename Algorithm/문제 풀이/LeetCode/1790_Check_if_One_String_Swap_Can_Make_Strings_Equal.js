/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let diff_idx = [];
    for(let i=0;i<s1.length;i++){
        if(s1[i] !== s2[i]){
            diff_idx.push(i);
        }
        
        if(diff_idx.length > 2) return false;
    }
    if(diff_idx.length == 0) 
        return true;
    else if(diff_idx.length == 2  && s1[diff_idx[0]] == s2[diff_idx[1]] && s2[diff_idx[0]] == s1[diff_idx[1]]) 
        return true;
    else return false;
};


