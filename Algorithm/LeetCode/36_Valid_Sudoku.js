/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
//채워져 있는 숫자들이 유효한지 boolean 값 리턴
    const checkIfDuplicatedInArr = (arr) => {
        let obj={};
        for(el of arr){
            if(el === '.') continue;
            if(obj[el] == 1) {
                return true;    //it's duplicated
            }
            obj[el] = 1;
        }
        return false;
    }

    for(let col=0;col<9;col++){
    //row check
    if(checkIfDuplicatedInArr(board[col])){
        return false;
    }
    //column check
    const cols = board.flat(2).filter((el,idx) => {
        if(idx % 9 === col) return el;
    });
     if(checkIfDuplicatedInArr(cols)){
        return false;
    }
    
        
    
}   

    return true;
};
