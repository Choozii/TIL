function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0) return 0;
    
    let i=0, j=1;
    while(j < arr.length){
        if(arr[i] !== arr[j]){
            arr[++i] = arr[j];
      }
      j++;
    }
     console.log(i+1);
  }

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4