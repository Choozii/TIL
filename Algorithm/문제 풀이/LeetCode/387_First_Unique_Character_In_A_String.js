/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    
    for(el of s){
        map[el] ? map[el]++ : map[el]=1;
    }
    // console.log(map);
   for(let i=0;i<s.length;i++){
       if(map[s[i]] === 1){
           return i;
       }
   }
    return -1;
};
