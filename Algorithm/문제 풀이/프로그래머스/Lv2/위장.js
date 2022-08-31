function solution(clothes) {
    const map = {};
    
    for(let el of clothes){
        if(!map[el[1]]) map[el[1]] = [el[0]];
        else map[el[1]].push(el[0]);
    }
    let mul = 1;
    for(let el of Object.entries(map)){
        mul *= (el[1].length+1);
    }
    
   return mul - 1;
}