function solution(s, n) {
    const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LowerCase = "abcdefghijklmnopqrstuvwxyz";
    let ans = "";
    for(let i=0;i<s.length;i++){
        let char = s[i];
        if(char === " "){
            ans+= " ";
        }
        else if(char === char.toLowerCase()){
           ans += LowerCase[(LowerCase.indexOf(char) + n) % 26]
        }else if(char === char.toUpperCase()){
           ans += UpperCase[(UpperCase.indexOf(char) + n) % 26]
        } 
    }
    return ans;
}