function solution(price, money, count) {
    let cost = 0;
    
    for(let i=1;i<count+1;i++){
        cost += price * i;
    }

    return money-cost<0?cost-money:0;
}