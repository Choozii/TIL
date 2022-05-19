/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    if(low % 2 != 0 && high % 2 != 0){    //둘다 홀수
        return (high-low)/2 + 1;    
    }else{  //둘다 짝수, 둘중 하나가 홀수
        return Math.ceil((high-low)/2);
    }
};
