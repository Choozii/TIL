function stringifyNumbers(obj){
    let copy = Object.assign({}, obj);

    function recursive(obj){
        for(let key of Object.keys(obj)){
            if(Number.isInteger(obj[key])){
                obj[key] = obj[key].toString();
            }else if(typeof obj[key] === "object"){
                recursive(obj[key]);
            }
    }
}
    recursive(copy);
    return copy;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));