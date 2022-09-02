function areThereDuplicates(...args) {
    const map={};
    for(let el of args){
       if(map[el]) { 
           console.log(true);
        return;
    }
       else map[el] = 1;
    }
    console.log(false);
    return;
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') 