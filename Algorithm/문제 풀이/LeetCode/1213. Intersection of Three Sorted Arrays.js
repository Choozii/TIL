/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
 var arraysIntersection = function(arr1, arr2, arr3) {
    // 세 arr에서 모두 나타나는 숫자들을 정렬해서 arr로 리턴
    arr1 = arr1.filter(el => arr2.includes(el));
    arr1 = arr1.filter(el => arr3.includes(el));
    return arr1.sort((a,b) =>a-b)
};