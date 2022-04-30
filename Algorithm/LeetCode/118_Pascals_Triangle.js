/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  /*
    rules)
    임의의 숫자 n, arr[n][0]와 arr[n][n]은 무조건 1
    arr[n][x] == arr[n-1][x-1] + arr[n-1][x]
    arr의 길이는 1개씩 추가
  */  
    let ans = [];
    for(let i=0;i<numRows;i++){
        let subArr = [];
       for(let j = 0;j < i+1;j++){
           if(j == 0 || i == j) subArr.push(1);
           else subArr.push(ans[i-1][j-1] + ans[i-1][j]);
       }
        ans.push(subArr);
    }
    return ans;
};
