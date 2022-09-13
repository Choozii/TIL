function quick_sort(arr, left=0, right=arr.length-1){

    function pivot(arr, start=0, end=arr.length-1){
        const swap = (arr, i, j) => {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        
        const pivot = arr[start];
        let swapIdx = start;

        for(let i=start + 1;i<=end;i++){
            if(pivot > arr[i]){
                swapIdx++;
                swap(arr, swapIdx, i);
            }
        }
        swap(arr, start, swapIdx);
        return swapIdx;  
    }
    if(left<right){
        let pivotIndex = pivot(arr, left, right);
        quick_sort(arr, left, pivotIndex-1);
        quick_sort(arr, pivotIndex+1, right);
    }
    return arr;
}

console.log(quick_sort([4, 6, 9, 1, 2, 5, 3]));

