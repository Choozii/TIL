function fib(n){
    function recursive(n){
        if(n == 0 || n == 1) return 1;
        else return recursive(n-1) + recursive(n-2);
    }
    return recursive(n-1);
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));