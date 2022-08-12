/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    //배열 내부에서 중복되는 원소가 있다면 return true
    const set = new Set(nums);
    return set.size === nums.length? false:true;
};