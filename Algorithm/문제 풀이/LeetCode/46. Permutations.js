/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    
    const visited = Array.from({length : nums.length}, ()=>0);
    const ans = [];
    
    function dfs(n, temp){
        if(n === nums.length){
            ans.push(temp);
        }
        
        for(let i=0;i<nums.length;i++){
            if(visited[i] == 0){
                visited[i] = 1;
                dfs(n+1, [...temp, nums[i]]);
                visited[i] = 0;
            }
        }
    }
    
    dfs(0, []);
    return ans;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const output = [];
    const visited = Array.from({length : nums.length}, ()=>false);
    
  function recursive(l, res){
      if(l === nums.length){
          output.push(res);
          return;
      }
      for(let i=0;i<nums.length;i++){
          if(!visited[i]){
              visited[i] = true;
              recursive(l+1, [...res, nums[i]]);
              visited[i] = false;
          }
      }
  }
    recursive(0, []);
    return output;
};