function averagePair(arr, target){
    let left = 0, right = arr.length - 1;
    let avg = (arr[left]+arr[right]) / 2;
    
    while(target !== avg && left < right){
        if(avg > target) right--;
        else left++;

        avg = (arr[left]+arr[right]) / 2;
    }

    return avg === target? true : false;
}

console.log(averagePair([1,2,3],2.5)) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
// averagePair([],4) // fals