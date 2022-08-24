function solution(s) {
    const words = s.split(" ");
    let ans = "";
    for(let i=0;i<words.length;i++){
        for(let idx in words[i]){
            if(idx % 2 == 0) ans += words[i][idx].toUpperCase();
            else ans += words[i][idx].toLowerCase();
        }
        if(i === words.length - 1) return ans;
        else ans += " ";
    }
}