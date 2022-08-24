function solution(s) {
    //소문자 a-z대문자A-Z순으로 정렬
    const ret = s.split("").sort().reverse();
    return ret.join("");
    // console.log(ret)
}