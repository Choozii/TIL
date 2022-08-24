function solution(n) {
    //n이 x의 제곱이라면 x+1의 제곱을 리턴
    //아니라면, -1을 리턴
    
    if(Number.isInteger(Math.sqrt(n))) 
        return (Math.sqrt(n)+1)**2;
    else return -1;
}