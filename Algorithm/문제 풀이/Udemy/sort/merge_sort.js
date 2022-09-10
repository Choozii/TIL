function merge(arr1, arr2){
    let p1 = 0, p2 = 0;
    const merged = [];
    while(p1 < arr1.length && p2 < arr2.length){
        if(arr1[p1]<arr2[p2]){
            merged.push(arr1[p1++]);  
        }else{
            merged.push(arr2[p2++]);  
        }
    }
    while(p1 < arr1.length){
        merged.push(arr1[p1++]);
    }
    while(p2 < arr2.length){
        merged.push(arr2[p2++]);
    }
    return merged;
}

function merge_sort(arr){
    if(arr.length === 1) return arr;

    const mid = Math.floor(arr.length/2);
    const left = merge_sort(arr.slice(0, mid));
    const right = merge_sort(arr.slice(mid));
    return merge(left, right);
}
console.log(merge_sort([1, 10, 50, 2, 14, 99, 100]));