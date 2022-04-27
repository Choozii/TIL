/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const arr = mat.flat();
    const row = mat.length;
    const col = mat[0].length;
    let ans = [];
    if (row * col !== r * c) return mat;
   
    while(arr.length){
        ans.push(arr.splice(0, c));
    }
    return ans;
};
