function solution(record) {
    const actions = [];
    const nickNames = {};
    const ret = [];
    for(let el of record){
        const inputs = el.split(" ");
        if(inputs[0] !== "Change")
            actions.push([inputs[1], inputs[0]]);
        
        if(inputs[0] !== "Leave")
            nickNames[inputs[1]] = inputs[2];
    }
    
    for(let el of actions){
        if(el[1] == 'Enter'){
            ret.push(`${nickNames[el[0]]}님이 들어왔습니다.`);
        }else{
            ret.push(`${nickNames[el[0]]}님이 나갔습니다.`);
        }
    }
    return ret;
}