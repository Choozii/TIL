/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const bfs = (grid, row, col) => {
        const queue = [[row, col]];
        const dr = [1, 0, -1, 0];
        const dc = [0, 1, 0, -1];
        const VISITED = -Infinity;
        let count = 0;
        
        grid[row][col] = VISITED;   //첫 인덱스
        
        while(queue.length > 0){
            const [row, col] = queue.shift();
            count++;
            console.log(row, col);
            for(let i=0;i<4;i++){
                let nr = row + dr[i];
                let nc = col + dc[i];
                
                if(nr < 0 || nr >= grid.length) continue;
                if(nc < 0 || nc >= grid[0].length) continue;
                
                if(grid[nr][nc] === 1){
                    grid[nr][nc] = VISITED; //해당 인덱스를 더이상 queue에 넣지 않도록
                    queue.push([nr, nc]);
                }
            }
        }
        
        return count;
    }
    
    const ret = [0,];
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === 1) ret.push(bfs(grid, i, j));
        }
    }
    return Math.max(...ret);
};
