/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    const majorNum = Math.floor((nums.length)/2);
    
    for(el of nums){
        if(map.has(el)){
            map.set(el, map.get(el) + 1);
        }else{
            map.set(el, 1);
        }
    }
    for(el of map){
        if(el[1] >majorNum){
            return el[0];
        }
    }
};
