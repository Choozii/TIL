/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

// 반복문으로 풀어보았지만 역시나 timeout
//     let max = 0;
//     for(let buyIdx = 0; buyIdx < prices.length - 1; buyIdx++){
//         for(let sellIdx = buyIdx + 1; sellIdx < prices.length; sellIdx++){
//             let diff = prices[sellIdx] - prices[buyIdx];
//             if(diff >= 0) max = Math.max(max, diff);
//         }
//     }
//     return max;
    
        var min = Number.MAX_SAFE_INTEGER; 
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
    
    
};
