function NaiveStringSearch(str, target){

    const compare = (str1, str2) => {
        return str1 === str2;
    }
    
    let count = 0;

    for(let i=0;i<str.length;i++){
        if(target[0] === str[i]){
            if(compare(str.slice(i, i+target.length), target)) count++;
        }
    }
    return count;
}

console.log(NaiveStringSearch("wowomgzomg", "omg"));