var maxAreaOfIsland = function(grid) {
    let max = 0;
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === 1){
                max = Math.max(max, dfs(grid, i, j));
            }
        }
    }
    
    return max;
    
    function dfs(grid, x, y){
        const dx = [-1,0,1,0];
        const dy = [0,1,0,-1];
        let area = 1;   // 첫번째 칸
        grid[x][y] = -1; // mark visited
        
        for(let i=0;i<4;i++){
            const nx = x + dx[i];
            const ny = y + dy[i];

            if(nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length) continue;
           
            if(grid[nx][ny] === 1){
                area += dfs(grid, nx, ny);
  
            }
        }
        return area;
    }
}
    function bfs(grid, i, j){
        const dx = [-1,0,1,0];
        const dy = [0,1,0,-1];
        
        const q = [[i,j]];
        let area = 1;
        grid[i][j] = -Infinity;

        
        while(q.length>0){
            const [r,c] = q.shift();
            
            for(let i=0;i<4;i++){
                let nr = r + dx[i];
                let nc = c + dy[i];
                
                if(nr >= 0 && nc >= 0 && nr < grid.length && nc < grid[0].length){
                    if(grid[nr][nc] === 1){
                        grid[nr][nc] = -Infinity;
                        q.push([nr, nc]);
                        area++;
                    }
                }
            }
        }
        
        return area;
    }
