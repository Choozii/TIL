/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let curSum = 0;
    
    for(let el of nums){
        if(curSum < 0) 
            curSum = 0;
        curSum += el;
        maxSum = Math.max(curSum, maxSum);
    }
    return maxSum;
};