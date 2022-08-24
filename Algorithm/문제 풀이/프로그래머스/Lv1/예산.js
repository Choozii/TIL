function solution(d, budget) {
    // 배열 d의 합계 중 최대값을 구하자(budget 값 이하)
    d = d.sort((a,b) => a-b);
    let sum = 0;
    for(let i=0;i<d.length;i++){
        if(sum+d[i] > budget) 
            return i;
        else
            sum += d[i];
    }
    return d.length;
}