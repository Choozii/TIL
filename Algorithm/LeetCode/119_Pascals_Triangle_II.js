/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let triangle = [[1]];
    for(let idx = 1; idx < rowIndex + 1; idx++){
        let row = [ ];
        for(let i=0;i<=idx; i++){
            if(i == 0 || i == idx) row.push(1);
            else row.push(triangle[idx-1][i-1] + triangle[idx-1][i]);
        }
        triangle.push(row);
    }
    return triangle[rowIndex];
};
