function solution(s) {
    //숫자와 영어가 섞여있는 string이 주어지면 숫자로 변환
     const mapping = {
         "zero" : 0,
         "one" : 1,
         "two" : 2,
         "three" : 3,
         "four" : 4,
         "five" : 5,
         "six" : 6,
         "seven" : 7,
         "eight" : 8,
         "nine" : 9
     }
     
     let ret="";
     let word="";
     
     for(let el of s){
         if(Number.isInteger(el*1)){
             ret += el;
         }else{
             word += el;
             if(mapping[word] == 0 || mapping[word]){
                 ret += mapping[word];
                 word="";
             }
         }
     }
     
     return Number(ret);
 }


 //다른 사람의 풀이

2
3
4
5
6
7
8
9
10
11
12
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
