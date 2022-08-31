
  function reverse(str){
    // add whatever parameters you deem necessary - good luck!
      function recursive(reversed){
          if(reversed.length === str.length){
              return reversed;
          }
          else 
            return recursive(reversed + str[str.length - reversed.length - 1]);
      }
      
      return recursive("");
  }
  
  console.log(reverse('awesome'));
  console.log(reverse('rithmschool'));

