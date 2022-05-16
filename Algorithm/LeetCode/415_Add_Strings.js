/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    let answer = [];
    let carry = 0;
    
    while(p1 >= 0 || p2 >= 0){
        let x1 = num1[p1] ? num1[p1]*1 : 0;
        let x2 = num2[p2] ? num2[p2]*1 : 0;
        
        let sum = (x1 + x2 + carry) % 10;
        carry = Math.floor((x1 + x2 + carry) / 10);
        
        answer.push(sum);
        p1--;
        p2--;
    }
    
    if(carry){
        answer.push(carry);
    }
    
    return answer.reverse().join('');
};
