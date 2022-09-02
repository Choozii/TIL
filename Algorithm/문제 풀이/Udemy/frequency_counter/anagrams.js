//two strings
//second string is an anagram of the first
//총 string의 길이는 같아야 함
//char의 순서는 상관없지만 나타나는 빈도는 같아야 함
//solve it using frequency counter pattern!

function validAnagram(str1, str2){
    const firstStrFrequency = {};
    const secondStrFrequency = {};

    if(str1.length !== str2.length) return false;

    for(let el of str1){
        firstStrFrequency[el] = (firstStrFrequency[el] || 0 ) + 1;
    }

    for(let el of str2){
        secondStrFrequency[el] = (secondStrFrequency[el] || 0 ) + 1;
    }
    
    for(let key in firstStrFrequency){
        if(!(key in secondStrFrequency)) 
            return false;
        if(firstStrFrequency[key]!==secondStrFrequency[key])
            return false;
    }
    return true;
}

console.log(validAnagram('anagramt', 'nagarams'));