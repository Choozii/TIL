function solution(n, computers) {
    const visited = Array.from({length :n}, ()=>false);
    let count = 0;
    for(let i=0;i<n;i++){
        if(!visited[i]) {
            dfs(i);
            count++;
        }
    }
    
    return count;
    
    function dfs(idx){
        visited[idx] = true;

        for(let i=0;i<n;i++){
            if(computers[idx][i] && !visited[i]){
                dfs(i);
            }
        }
    }
}