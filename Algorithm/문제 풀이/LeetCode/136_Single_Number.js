/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map();
    for(el of nums){
        if(map.has(el)){
            map.set(el, map.get(el)+1);
        }else{
            map.set(el, 1);
        }
    }
    
    
    for(el of map){
        if(el[1] == 1)
            return el[0];
    }
};
