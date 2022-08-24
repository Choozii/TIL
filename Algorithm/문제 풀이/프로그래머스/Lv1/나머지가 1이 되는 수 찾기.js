function solution(n) {
    const target = n-1;
    for(let i=2;i<=target;i++){
        if(target % i === 0) return i;
    }
    return target;
}