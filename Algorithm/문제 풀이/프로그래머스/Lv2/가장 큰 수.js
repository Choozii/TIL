//timeout

function solution(numbers) {
    const temp = Array.from({length : numbers.length}, ()=>0);
    const visited = Array.from({length : numbers.length}, ()=>0);
    const ans = [];
    
    function recursive(l){
        if(l === numbers.length){
            ans.push(Number(temp.join("")));
            return;
        }
        for(let i=0;i<numbers.length;i++){
            if(visited[i] === 0){
                visited[i] = 1;
                temp[l] = numbers[i];
                recursive(l+1);
                visited[i] = 0;
            }
    }
    }
    recursive(0);
    return Math.max(...ans).toString();
}

// 풀이

function solution(numbers) {
    numbers = numbers.map(el=> el +"").sort((a,b) => (b+a) - (a+b));
    return numbers[0] === "0"? "0" : numbers.join("");
}