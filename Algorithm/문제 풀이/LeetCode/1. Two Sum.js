/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const map = {};
    for(let i=0;i<nums.length;i++){
        const com = target-nums[i];
        if(com in map){
            return ([map[com], i]);
        }
        map[nums[i]] = i;
    }
};