function solution(n) {
    
    const numbers = [4,1,2];
    let ans = "";
    
    while(n){
        ans = numbers[n%3] + ans;
        n = (n%3 == 0)? n/3-1:Math.floor(n/3);
    }
    return ans;
}