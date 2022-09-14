var combine = function(n, k) {
    const output = [];
    function recursive(l, nums, num){
        if(l === k){ 
            output.push(nums);
            return;
        }
        
        for(let i=num+1;i<n+1;i++){
            recursive(l+1, [...nums, i], i);
        }
    }
    
    recursive(0, [], 0);
    return output;
};