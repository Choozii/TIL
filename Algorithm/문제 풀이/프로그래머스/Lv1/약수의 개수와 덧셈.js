function solution(left, right) {
    const getCount = (num) => {
        let count = 0;
        for(let i=1;i<=num;i++){
            if(num % i == 0) count++;
        }        
        return count;
    }
    
    let sum = 0;
    for(let i=left;i<=right;i++){
        const count = getCount(i);
        console.log(count);
        sum += (count % 2 == 0)? i : i*(-1);
    }
    
    return sum;
}
