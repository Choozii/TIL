/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    
    const originalColor = image[sr][sc];
    if(originalColor === newColor) return image;
    
    const q = [[sr,sc]];
    image[sr][sc] = newColor;

    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    
    while(q.length>0){
        const [r, c] = q.shift();
        
        for(let i=0;i<dx.length;i++){
            const nr = r + dx[i];
            const nc = c + dy[i];
            
            if(nr < 0 || nc < 0 || nr >= image.length || nc >= image[0].length) continue;
            if(image[nr][nc] === originalColor){
                image[nr][nc] = newColor;
                q.push([nr, nc]);
            }
        }
    }
    return image;
    
};