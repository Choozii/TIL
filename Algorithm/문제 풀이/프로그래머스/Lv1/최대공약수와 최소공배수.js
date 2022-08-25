function solution(n, m) {
    //최대 공약수와 최소 공배수 구하기
    const small = Math.min(n,m);
    const big = Math.max(n,m);
    
    let a = 1;    //최대공약수
    
    for(let i=2;i<=small;i++){
        if(n%i == 0 && m%i == 0) a = i;
    }
    
    let b = 1;    //최소공배수

    for(let i=1;i<=big;i++){
        if(n*i % m === 0) {
            b = n*i;
            break;
        }
    }
    
    return [a,b];
}

/*
NOTE: 유클리드 호제법을 이용해서 간편하게 구할 수 있음
	
class Solution {
    public int[] solution(int n, int m) {
        // 최대 공약수
        int a = Math.max(n, m);
        int b = Math.min(n, m);
        while (b != 0) {
            int r = a % b;
            a = b;
            b = r;
        }
 
        // 최대 공배수 = 두 수의 곱 / 최대공약수
        return new int[] { a, n * m / a };
    }
}



*/