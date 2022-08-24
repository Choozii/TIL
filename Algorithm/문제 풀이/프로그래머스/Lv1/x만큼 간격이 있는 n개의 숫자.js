function solution(x, n) {
    let num = x;
    const answer = [num];
    while(answer.length !== n){
        num += x;
        answer.push(num);    
    }
    
    return answer;
}