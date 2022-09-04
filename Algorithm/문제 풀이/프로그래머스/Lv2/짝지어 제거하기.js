function solution(s)
{
    const str = [s[0]];
    
    for(let i=1;i<s.length;i++){
        if(str[str.length - 1] === s[i]) str.pop();
        else str.push(s[i]);
    }
    return str.length === 0? 1:0;
}