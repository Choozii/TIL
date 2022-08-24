function solution(absolutes, signs) {
    let p = 0;
    let sum = 0;
    while(p < absolutes.length){
        sum += signs[p]?absolutes[p]:absolutes[p]*(-1);
        p++;
    }
    return sum;
}