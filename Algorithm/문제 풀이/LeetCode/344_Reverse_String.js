/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let i=0;i<s.length/2;i++){
        let temp = s[i];
        s[i] = s[s.length-1-i];
        s[s.length-1-i] = temp;
    }
}

//discuss에서 좋은 풀이..
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        right--;
        left++;
    }
};
;
