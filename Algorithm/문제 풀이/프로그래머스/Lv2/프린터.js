function solution(priorities, location) {
    let p = 0;
    let printed = Array.from({length : priorities.length}, ()=>false);
    
    const getNotVisitedMax = () => {
        let max = -Infinity;
        for(let i=0; i<printed.length;i++){
            if(printed[i] === false) 
                max = Math.max(priorities[i], max);
        }
        return max;
    }
    
    while(printed[location] === false){
        //방문 안한 애들 중에 제일 커야함
        if(priorities[p % priorities.length] === getNotVisitedMax()){
            printed[p % priorities.length] = true;
        }
        p++;
    }
    
    return printed.filter(el => el===true).length;    
}