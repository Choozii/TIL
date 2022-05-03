/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(" ");
    let ans=[];
    const reverse = (str) => {
        const reversed = [];
        for(let i=0;i<str.length/2;i++){
            reversed[i] = str[str.length - 1 - i];
            reversed[str.length - 1 - i] = str[i];
        }
        return reversed.join('');
    }
    
    for(el of words){
        ans = [...ans, reverse(el)];
    }
    return ans.join(' ')
};
