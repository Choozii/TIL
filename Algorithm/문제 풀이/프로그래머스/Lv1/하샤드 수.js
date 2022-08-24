function solution(x) {
    //x의 자릿수의 합으로 x가 나누어 떨어지면 return true
    let sum = 0;
    for(let el of x.toString()){
        sum += el*1;
    }
    if(x % sum === 0) return true;
    else return false;
}