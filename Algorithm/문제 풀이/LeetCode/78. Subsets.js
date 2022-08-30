/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let ans = [];
    
    function dfs(l, temp){
        if(l === nums.length){
            ans.push(temp);
            return ;
        }
        
                //do nothing
                dfs(l+1, temp);
                dfs(l+1,[...temp, nums[l]]);
            }
        
    dfs(0, []);
    return ans;
};