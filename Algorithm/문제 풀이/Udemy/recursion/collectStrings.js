function collectStrings(obj){
    const strings=[];

    function recursive(obj) {
        for(let val of Object.values(obj)){
            if(typeof val === "string") strings.push(val);
            else if(typeof val === "object") recursive(val);
            }
    }
    recursive(obj);
    return strings;

}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])