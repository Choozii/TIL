function solution(numbers) {
    const res=[];
    for(let i=0;i<numbers.length-1;i++){
        for(let j=i+1; j<numbers.length;j++){
            res.push(numbers[i]+numbers[j]);
        }
    }
    const set = new Set(res);
    return [...set].sort((a,b) => a-b);
}