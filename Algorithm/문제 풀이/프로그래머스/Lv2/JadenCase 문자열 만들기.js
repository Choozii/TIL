function solution(s) {
   
    const strs = s.split(" ");
    let ans =""
    for(let i=0;i<strs.length;i++){
        ans += strs[i].charAt(0)?.toUpperCase() + strs[i].slice(1).toLowerCase();
        if(i !== strs.length-1) ans += " "
    }
    return ans;
}