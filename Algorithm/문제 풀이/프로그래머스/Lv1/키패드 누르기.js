// TODO: solve it again
function solution(numbers, hand) {
  
    const KEY = [['1','2','3'], ['4','5','6'], ['7','8','9'], ['*', '0', '#']];
    
    let left = "*", right = "#";
    let ret = "";
    
    const getDist = (num1, num2) => {
        let idxs = [[],[]];
        
        for(let i=0;i<KEY.length;i++){
            for(let j=0;j<KEY.length;j++){
                if(KEY[i][j] === num1.toString()) idxs[0] = [i, j];
                else if(KEY[i][j] === num2.toString()) idxs[1] = [i, j];
            }
        }
        
        const dist = Math.abs(idxs[0][0] - idxs[1][0]) + Math.abs(idxs[0][1] - idxs[1][1]);
        console.log(dist);
        return dist;
    }
    
    for(let el of numbers){
        if("147".includes(el)){
            left = el;
            ret += "L";
        }else if("369".includes(el)){
            right = el;
            ret += "R";
        }else{
            let leftDist = getDist(el, left);
            let rightDist = getDist(el, right);
            
            if(leftDist == rightDist){
                if(hand == "right"){
                   right = el;             
                    ret += "R";
                }
                else {
                    left = el;
                    ret += "L";
                }   
            }
            else if(leftDist < rightDist){
                left = el;
                ret += "L";
            }
            else {
                right = el;
                ret += "R";
            }
        }
    }
    return ret;
}