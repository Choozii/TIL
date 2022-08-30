function factorial(n){
    if(n === 0) return 1;
    else return n*factorial(n-1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));
