function someRecursive(arr, callback){
    function recursive(nums){
        if(nums.length === 0) 
            return false;
        else if(callback(nums[0]) === true) 
            return true;
        else
            return recursive(nums.slice(1))
    }
    return recursive(arr);
}  

const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd))
console.log(someRecursive([1,2,4], isOdd))
console.log(someRecursive([2,4], isOdd))
