function capitalizeWords(arr){

    function recursive(l, arr){
        if(l === arr.length){
            return arr;
        }
        else{
            arr[l] = arr[l].toUpperCase();
            return recursive(l+1, arr);
        }
    }
    return recursive(0, arr);
}

console.log(capitalizeWords(["think", "love", "like"]));
