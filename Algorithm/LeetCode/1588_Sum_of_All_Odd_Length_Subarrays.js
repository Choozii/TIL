/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    for(let i=1;i<arr.length+1;i=i+2){  //홀수들에 대해서 반복
        let curr = 0;
        while(curr <= arr.length - i){
         
            let sliced = arr.slice(curr ,i + curr);
            
            sum += sliced.reduce((a,b)=>a+b,0);
            curr++;
        }
    }
    return sum;
};
