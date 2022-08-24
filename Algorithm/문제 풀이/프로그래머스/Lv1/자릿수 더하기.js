function solution(n)
{
   const str = n.toString();
    let sum=0;
    for(let i=0;i<str.length;i++){
    sum += str[i]*1;    
    }
    return sum;
}