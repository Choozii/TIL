/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //공백으로 이루어진 문장의 마지막 단어의 길이를 리턴
    
    // " "으로 split에서 배열 생성
    // 배열의 마지막 요소에 대해 length 리턴
    
    // 공백이 여러 칸인 경우 -> 배열 뒤에서부터 탐색하며 length 체크
    // 예외 케이스 : 문장이 ""인 경우는 주어지지 않음
    
    const strs = s.split(" ");
    for(let i=strs.length-1; i>=0 ;i--){
        let len = strs[i].length;
        if(len !== 0) return len;
    }
};