/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

//FAIL
 var updateMatrix = function(mat) {
    let flag = false;
   for(let i=0;i<mat.length;i++){
       for(let j=0; mat[0].length;j++){
           if(mat[i][j] === 0){
               bfs(mat, i,j);
               flag = true;
               break;
           }
       }
         if(flag) break;
   }
    return mat;
    
    
    function bfs(mat, i, j){
        const visited = Array.from({length : mat.length}, ()=>Array.from({length:mat[0].length}, ()=>false));
        
        const dx = [-1, 0, 1, 0];
        const dy = [0, -1, 0, 1];
        
        visited[i][j] = true;
        const q = [[i,j]];
        
        while(q.length>0){
            const [x,y] = q.shift();
            let min = Infinity;
            let minX = 0, minY = 0;
            for(let i=0;i<4;i++){
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if(nx < 0 || ny < 0 || nx >= mat.length || ny >= mat[0].length) continue;
                min = Math.min(min, mat[nx][ny]);
                if(min === mat[nx][ny]){
                    minX = nx;
                    minY = ny;
                }
                if(visited[nx][ny]) continue;
                
                q.push([nx, ny]);
                visited[nx][ny] = true;                
            }
            if(mat[x][y] === 0) continue;
            mat[x][y] = mat[minX][minY] + 1;
        }
        console.log(mat);
    }
};