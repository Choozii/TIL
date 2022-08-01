/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const queue = [{row : sr, col : sc}];
    const originalColor = image[sr][sc];
    if(newColor === originalColor) return image;
    const dr = [0, 1, -1, 0];
    const dc = [-1, 0, 0 ,1];
    
    while(queue.length !== 0){
        const {row, col} = queue.shift();
        image[row][col] = newColor;
        
        for(let i=0;i<4;i++){
            let new_row = row + dr[i];
            let new_col = col + dc[i];
            
            if(new_row < 0 || new_row >= image.length) continue;
            if(new_col < 0 || new_col >= image[0].lenagth) continue;

            if(image[new_row][new_col] == originalColor)
                queue.push({row : new_row, col : new_col});
        }
    }
    return image;
};
