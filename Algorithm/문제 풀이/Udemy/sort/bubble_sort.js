function bubble_sort(arr){
    for(let i=arr.length;i>0;i--){
        for(let j=0;j<i - 1;j++){
            if(arr[j]>arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubble_sort([29, 10, 14, 30, 37, 14, 18]));
