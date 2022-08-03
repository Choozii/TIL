/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  
    // nums array에서 val 값을 제거하기(배열 자체를 splice하기)
    // input은 숫자들로 이루어진 배열(nums), 삭제할 정수 값 (val)
    // nums가 빈 배열인 경우 -> ?
    // output은 삭제하고나서 유효한 갯수 (k)와 val이 삭제된(_처리) 배열
    
    for(let i=nums.length;i>=0;i--){
        if(nums[i] === val){
            nums.splice(i, 1);
        }
    }
    
    return nums.length;
};