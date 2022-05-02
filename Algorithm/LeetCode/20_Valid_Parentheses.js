/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketPair = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    if(s.length % 2 !== 0) return false;
    
    for(el of s){
        if(el == ']' || el == '}' || el == ')'){
            const popped = stack.pop();
            if(popped !== bracketPair[el]) return false;
            continue;
        }
            stack.push(el);
    }
        if(stack.length !== 0) return false;
        return true;
};
