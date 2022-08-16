/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
 var calculateTime = function(keyboard, word) {
    // 키보드와 target 단어 string이 주어지면
    // target 단어를 완성하는데 걸리는 시간을 리턴하라
    // 인덱스 i에서 j까지 움직이는데 들어가는 시간 |i-j|
    // 처음은 0에서 첫 char까지 거리, 두번째는 |첫 char-두번째 char|
    
    const map = {}
    for(let i in keyboard){
        const el = keyboard[i];
        map[el] = i*1;
    }
    
    let sum = 0;
    
    sum += map[word[0]];
    for(let i=0;i<word.length-1;i++){
        const first = word[i];
        const second = word[i+1];
     
        sum += Math.abs(map[first] - map[second]);
    }
    return sum;
};