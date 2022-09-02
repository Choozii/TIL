function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
      function recursive(l, arr){
          if(l === arr.length){
              return arr;
          }
          else {
              arr[l] = arr[l][0].toUpperCase() + arr[l].slice(1);
              return recursive(l+1, arr);
          }
      }    
      return recursive(0, arr);
  }
  
  