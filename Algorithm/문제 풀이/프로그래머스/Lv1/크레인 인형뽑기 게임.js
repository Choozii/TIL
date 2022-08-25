function solution(board, moves) {
    // 2차원 배열에서 i값이 주어지면 arr[i][length-1] <-맨 마지막 요소를 삭제 후 res 배열에 넣음 
    // res 배열에서 똑같은 값이 연속해서 2개 존재하는 경우 사라짐
    // 사라지는 횟수 count and return
    const res = [];
    let count = 0;
    let inversed = [];
    for(let i=0;i<board.length;i++){
        const temp=[];
        for(let j=0;j<board[i].length;j++)
                temp.push(board[j][i]);
        inversed.push(temp);
    }
    
    for(let i=0;i<inversed.length;i++){
        inversed[i] = inversed[i].filter(el => el!==0);
    }    
    
    for(let el of moves){
        const targetArr = inversed[el-1];
        if(targetArr.length == 0) continue;
        const doll = targetArr.shift();
        
        if(res.length > 0 && res[res.length-1] == doll){
                res.pop();
                count += 2;
        }else{
            res.push(doll);
        }
    }
    
    return count;
}