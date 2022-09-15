function solution(maps) {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const q = [[0,0]];
    
    return bfs();
    
    function bfs(){
        maps[0][0] = 1;
        while(q.length > 0){
           const [cx, cy] = q.shift();
           for(let i=0;i<4;i++){
               const nx = cx + directions[i][0];
               const ny = cy + directions[i][1];
               
               if(nx < 0 || ny < 0 || nx >= maps.length || ny >= maps[0].length) continue;
               if(maps[nx][ny] === 1){
                   maps[nx][ny] = maps[cx][cy] + 1;
                   q.push([nx, ny]);
               }
           }   
        }
        const last = maps[maps.length-1][maps[0].length-1];
        if(last <= 1) return -1;
        else return last;
    }
}