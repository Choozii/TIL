function solution(n) {
    let count = 0;
    
    function recursive(num, sum){
        if(sum > n) 
            return;
        
        if(sum === n){
           count++;
            return;
        }
        recursive(num + 1, sum + num);
    }
    
    for(let i=1;i<=n;i++){
        recursive(i, 0);
    }
    
    return count;
}