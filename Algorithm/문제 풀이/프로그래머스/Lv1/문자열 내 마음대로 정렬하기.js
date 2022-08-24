function solution(strings, n) {
    strings = strings.sort();
    strings = strings.sort(function(a,b){
        if(a[n] < b[n]) return -1;
        else if(b[n] < a[n]) return 1;
        else return 0;
    });
    return strings;
}