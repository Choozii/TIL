/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0, prod = 1;
    for(let el of n.toString()){
        sum += (el*1);
        prod *= (el*1);
    }
    return prod-sum;
};
