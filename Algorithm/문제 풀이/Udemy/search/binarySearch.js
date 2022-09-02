function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    while(target !== arr[middle] && left < right){
        if(target < arr[middle]) right = middle - 1;
        else left = middle + 1;
        middle = Math.floor((left + right) / 2);
    }

    return arr[middle] === target? middle :  -1;
}