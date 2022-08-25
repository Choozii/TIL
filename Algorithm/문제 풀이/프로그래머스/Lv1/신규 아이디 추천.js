function solution(new_id) {

     const step2 = (new_id) => {
         
       let id = "";
    for(let el of new_id){
        if('a'<=el && el<='z') id+=el;
        else if(Number.isInteger(el*1)) id+=el;
        else if(el == '-' || el == '_' || el == '.') id += el;
    }
        return id;
    }
     
     const step3 = (new_id) => {
         let str="";
         for(let i=0;i<new_id.length-1;i++){
             if(new_id[i] == '.'){
                 if(new_id[i+1]!='.') 
                     str+='.';
                 else
                     continue;
             }
             else str += new_id[i];
         }
         if(new_id[new_id.length-1] !== '.') str += new_id[new_id.length-1]
         return str;
     }
     const step4 = (new_id) => {
         if(new_id[0] == ".") new_id = new_id.slice(1);
         if(new_id[new_id.length-1] == ".") new_id = new_id.slice(0,new_id.length-1);
    return new_id;
     }
    new_id = new_id.toLowerCase();
    new_id = step2(new_id);
    new_id = step3(new_id);
    new_id = step4(new_id);
    if(new_id.length === 0) new_id += 'a';
    if(new_id.length>=16) new_id = new_id.slice(0,15);
    new_id = step4(new_id);
    if(new_id.length<=2){
        const last = new_id[new_id.length-1];
        while(new_id.length<3){
        new_id+=last;
        }
    }
    return new_id;
}