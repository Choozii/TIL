

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    function recursion(l){
        if(l === Math.floor(str.length/2)){
            return true;
        }
        
        if(str[l] === str[str.length-1-l])
          return recursion(l+1);
        else
          return false;
    }
    const res = recursion(0);
    console.log(res);
    return res;
  }

  isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false