/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = -Infinity;
    for(let customer = 0;customer<accounts.length;customer++){
        let customerSum = accounts[customer].reduce((a, b)=> a + b, 0);
        if(max < customerSum)
            max = customerSum;
    }
    return max;
};
