/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if(digits.length == 0) 
        return [];
    
    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let ans = [];
    
    function bt(l, str){
        if(str.length === digits.length){
            ans = [...ans, str];  
            return;
        }
        const strs = map[digits[l]];
        for(let i=0;i<strs.length;i++){
            bt(l+1, str+strs[i]);
        }
    }
    
    bt(0, "");
    
    return ans;
};