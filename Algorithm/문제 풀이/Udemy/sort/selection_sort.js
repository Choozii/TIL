function selection_sort(arr){

    for(let i = 0;i<arr.length;i++){
        let lowest = i;
        for(let j = i+1;j<arr.length;j++){
            if(arr[j] < arr[lowest]) lowest = j;
        }
        if(i === lowest) continue;

        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }

    return arr;
}
 
console.log(selection_sort([29, 10, 14, 30, 37, 14, 18]));