// 소문자 단어 배열에서 가장 긴 공통의 접두어를 찾기
// 공통되는 string이 없다면 return ""

// 예외 케이스 : input에 ""이 있다면 return ""


var longestCommonPrefix = function(strs) {
    // 각 단어를 돌면서
    // 각 단어의 인덱스를 비교 -> 길이가 제일 짧은 단어만큼만 비교
    // 비교는 map을 만들어서 하면 좋을 것 같음. 인덱스 : 값 꼴로
    // 만약 같다면 common 변수에 저장
    // 만약 strs 중에 ""인 단어가 있다면 return ""
    let commonStr = "";
    let map = {};
        for(let i=0;i<strs.length;i++){
            for(let j=0;j<strs[i].length;j++){
                //각 단어의 인덱스를 돌 것
                if(map[j]){
                    if(map[j] !== strs[i][j]) console.log(commonStr);
                }else{
                    map[j] = strs[i][j];
                }
            }
            console.log(map);
        }
    // console.log(strs);
    console.log(commonStr);

};

longestCommonPrefix(["flower","flow","flight"]);
longestCommonPrefix(["dog","racecar","car"]);
