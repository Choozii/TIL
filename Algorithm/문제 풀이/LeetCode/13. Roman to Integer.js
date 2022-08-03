// Roman 규칙에 따라서 Roman 숫자를 integer로 변환하기
// Roman 규칙 - 주어진 Symbol과 value 객체 있음
// 보통 왼쪽에서 오른쪽으로 큰 로마 숫자부터 나열
// 만약 IV, IX, XL, XC, CD, CM이 나타난다면 빼기를 사용한 예외

// input : Roman string
// output : integer
// 예외 인풋은 없을 듯

function translateToInt(str){
    // str을 순회하면서 지금 char가 다음 char보다 크거나 같은지 확인
    // 크거나 같다면 그냥 더해주면 됨, 작은 경우에는 (예외적으로 처리해주어야 하는데) 해당 숫자는 빼주어야 함
    let sum = 0;
    const ROMAN_TO_INT = {
        "I" : 1,
        "V": 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    };

    for(let i=0;i<str.length-1;i++){
        if(ROMAN_TO_INT[str[i]] < ROMAN_TO_INT[str[i+1]]) 
            sum -= ROMAN_TO_INT[str[i]]; 
        else 
            sum += ROMAN_TO_INT[str[i]];  
    }
    sum += ROMAN_TO_INT[str[str.length - 1]];

    return sum;
}
