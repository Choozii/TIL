function solution(begin, target, words) {
    const q = [begin];
    const visited = {};
    if(!words.includes(target)) return 0;
    
    bfs();
    console.log(visited);
    return visited[target];
    
    function getDiffNum(word1, word2){
        let count = 0;
        for(let i=0;i<word1.length;i++){
            if(word1[i] !== word2[i]) count++;
            if(count >= 2) return count;
        }
        return count;
    }
    function bfs(){
        visited[begin] = 0;
        
        while(q.length > 0){
            const word = q.shift();
            
            for(let el of words){
                if(getDiffNum(word, el) === 1 && !visited[el]){
                    q.push(el);
                    visited[el] = visited[word]+1;
                }
            }
        }
    }
}