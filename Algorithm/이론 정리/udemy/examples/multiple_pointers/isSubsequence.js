function isSubsequence(str1, str2){
    //str1이 순서를 지키면서 str2에 나타나는지 체크
    let p1 = 0, p2 = 0;
    while(p1<str1.length && p2<str2.length){
        if(str1[p1] === str2[p2]) {
            p1++;
            p2++;
        }else{
            p2++;
        }
    }

    return p1 === str1.length?true:false;
}


isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)