function sameFrequency(n1, n2){
    // good luck. Add any arguments you deem necessary.
    const map = {};
    if(n1.toString().length !== n2.toString().length) return false;
   
    for(let el of n1.toString()){
        map[el] = map[el]+1|1;
    }
    for(let el of n2.toString()){
        if(!map[el]) return false;
    }
    return true;
  }
  
  console.log(sameFrequency(182, 281));
  console.log(sameFrequency(34,14));
  console.log(sameFrequency(3589578, 5879385));
  console.log(sameFrequency(22, 222));
