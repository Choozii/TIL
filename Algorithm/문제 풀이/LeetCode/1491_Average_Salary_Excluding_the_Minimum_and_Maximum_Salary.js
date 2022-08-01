/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const max = Math.max(...salary);
    const min = Math.min(...salary);
    let sum = 0;
    for(let el of salary){
        if(el == max || el == min) continue;
        sum += el;
    }
    return sum/(salary.length - 2);
};
