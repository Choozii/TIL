function insertion_sort(arr){
    
    for(let i=1;i<arr.length;i++){
        let currentVal = arr[i];
        let j=i-1;
        
        while(j>=0 && arr[j] > currentVal){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertion_sort([29, 10, 14, 30, 37, 14, 18]));