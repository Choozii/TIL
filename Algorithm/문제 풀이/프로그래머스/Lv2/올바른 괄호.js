function solution(s){
    if(s[0] == ")") return false;
    
    const stack = [];
    let idx = 0;
    
    while(idx < s.length){
        if(s[idx] === "(") stack.push("(");
        else if(s[idx] === ")") {
            if(stack.length === 0) return false;
            stack.pop();
        }
        idx++;
    }
    
    if(stack.length) return false;
    return true;
}