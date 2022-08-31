function solution(brown, yellow) {
    let sum = (brown + 4)/2;
    let multiple = yellow - 4 + (2 * sum);
    
    for(let i=1, j=sum-1; i<sum, j>0;i++, j--){
            if(i*j === multiple){
                return i>j?[i,j]:[j,i];
            }
    }
}