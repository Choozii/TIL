/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */


var searchMatrix = function(matrix, target) {
    
    const binarySearch = (row, target) => {
        let start = 0
        let end = row.length - 1;

        while(start < end){
            let mid = Math.floor((start + end)/2);
            
            if(row[mid] === target){
                return true;
            }
            else if(row[mid] < target){
                start = mid;
            }else{  //mid value > target
                end = mid;
            }
        }        
        return false;
    }
    
    for(let i=0;i<matrix.length;i++){   //각 행마다 바이너리 서치
        if(binarySearch(matrix[i], target))
            return true;
    }
    // console.log(binarySearch(matrix[1], target));
    return false;
};

// var searchMatrix = function(matrix, target) {
    
//     for(let i=0;i<matrix.length;i++){
//         for(let j=0;j<matrix[0].length;j++){
//             if(matrix[i][j] == target) return true;
//         }
//     }
//     return false;
    
// }


var searchMatrix = function(matrix, target){

    const binarySearch = (index, isTravelingRow) => {
        let lo = index;
        let hi = isTravelingRow? matrix[0].length-1 : matrix.length-1;
        
        while(lo <= hi){
            let mid = Math.floor((lo + hi) /2);
            if(isTravelingRow){
                if(matrix[index][mid] == target) return true;
                else if(matrix[index][mid] < target) lo = mid + 1;
                else hi = mid - 1;
            }else{
                // console.log(matrix, mid, index);
                if(matrix[mid][index] === target) return true;
                else if(matrix[mid][index] < target) lo = mid + 1;
                else hi = mid - 1;
            }
        }
        return false;
    }
    
    if(!matrix || matrix.length === 0) 
        return false;
    
    let shorterLen = matrix.length > matrix[0].length? matrix[0].length : matrix.length;
    
    for(let i=0; i<shorterLen;i++){
        if(binarySearch(i, true) || binarySearch(i, false)){
            return true;
        }
    }
    return false;
}
