function solution(nums) {
    //N개 중에 N/2개를 뽑는데, 최대한 중복이 없이 뽑는 경우에 폰켓몬 종류 갯수 리턴
    const selectNum = nums.length/2;
    const set = new Set(nums);
    if(set.size >= selectNum) 
        return selectNum;
    else
        return set.size;
}