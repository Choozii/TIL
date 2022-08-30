function solution(progresses, speeds) {
    let p = 0;
    let day = 0;
    let ans={};
    
        while(progresses.length > p){
        if(progresses[p] + speeds[p] * day >= 100) {
            p++;
            ans[day] = (ans[day] || 0) + 1;
        }else{
            day = Math.ceil((100 - progresses[p]) / speeds[p]);
        }
    }
    
    return Object.values(ans);
    }