/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let common = strs[0];
    const getCommon = (str1, str2) => {
        let p1 = 0, p2 = 0;
        while(p1 < str1.length && p2 < str2.length){
            if(str1[p1] === str2[p2]){
                p1++;
                p2++;
            }else
                break;
        }
        return str1.substr(0, p1);
    }
    
    for(let i=1;i<strs.length;i++){
        common = getCommon(common, strs[i]);
    }
    return common;
};