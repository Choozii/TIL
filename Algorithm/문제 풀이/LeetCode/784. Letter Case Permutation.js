/**
 * @param {string} s
 * @return {string[]}
 */
 var letterCasePermutation = function(s) {
    
    let count = 0;
    const output = [];
    
    function recursive(l, str){
        if(l === s.length){
            output.push(str.join(""));
            return;
        }
         if(Number.isInteger(s[l]*1)) {
            recursive(l+1, [...str, s[l]]);
            }
            else {
                recursive(l+1, [...str, s[l].toLowerCase()]);
                recursive(l+1, [...str, s[l].toUpperCase()]);
            }
        }
        recursive(0, []);
    
    return output;
};