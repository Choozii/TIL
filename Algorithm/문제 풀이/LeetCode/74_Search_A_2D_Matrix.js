/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let rowIdx = 0; rowIdx<matrix.length;rowIdx++){
    let startIdx = 0, endIdx =  matrix[0].length - 1;
    while(startIdx <= endIdx){
        const midIdx = endIdx + Math.floor((startIdx - endIdx) / 2);
        const midValue = matrix[rowIdx][midIdx];
        if(midValue == target) return true;
        
        midValue > target ? endIdx = midIdx-1 : startIdx = midIdx+1;
        }
    }
    return false;
};
