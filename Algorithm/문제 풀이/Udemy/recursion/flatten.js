function flatten(arr){
    const ans = [];
    function recursion(arr){
        for(let i=0;i<arr.length;i++){
            if(Number.isInteger(arr[i]))
                ans.push(arr[i]);
            else
                recursion(arr[i]);
        }
    }   
    recursion(arr);
    return ans;
}

flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3