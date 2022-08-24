//const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);


function solution(sizes) {
    // 가장 큰 가로, 세로 값을 수용 가능한 면적을 구하기
    // 단, 명함을 회전시킬 수도 있음
    
    // 각 배열에 대해서 큰 값을 가로쪽으로 몰아버리고, 세로에 작은값을 둔다.
    // return 모든 가로 값 중에 최대값 * 모든 세로값 중에 최대값
    
    for(let el of sizes){
        const big = el[0] >= el[1]? el[0]:el[1];
        const small = el[0] < el[1]? el[0]:el[1];
        el[0] = big;    //큰 값을 가로에
        el[1] = small;  //작은 값을 세로에
    }
    let bigWidth = 0;
    let bigHeight = 0;
    
    for(let el of sizes){
        if(el[0] >= bigWidth){
            bigWidth = el[0];
        }
        if(el[1] >= bigHeight){
            bigHeight = el[1];
        }
    }
    return bigWidth * bigHeight;
}