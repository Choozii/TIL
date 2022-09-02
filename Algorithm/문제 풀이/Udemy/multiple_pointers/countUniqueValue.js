//hash map
// function countUniqueValues(arr){
//     const map = {};
//     for(let el of arr){
//         map[el] = map[el]+1 | 1;
//     }
//     let count = 0;
//     for(let el of Object.values(map)){
//         if(el >= 1) count++;
//     }
//     return count;
// }

// console.log(countUniqueValues([1,1,1,1,1,2]))
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
// console.log(countUniqueValues([]))
// console.log(countUniqueValues([-2,-1,-1,0,1]))


//two pointers

function countUniqueValues(arr){
    if(arr.length === 0) return 0;

    let p1 = 0, p2 = 0;

    while(p1 < arr.length){
        if(arr[p1] === arr[p2]){
            p1++;
            // console.log("index",p1, arr.length);
        }else{
            p2++;
            arr[p2] = arr[p1];
            console.log("changed", arr);
        }
    }
    return p2+1;
}

console.log(countUniqueValues([1,1,1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2,-1,-1,0,1]))