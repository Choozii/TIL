var maxDepth = function(root) {
    if(!root) return 0;
    const queue = [root];
    let level = 0;
    while(queue.length > 0){
        let qLen = queue.length;
        
        for(let i=0; i<qLen; i++){
           let curr = queue.shift();
            if(curr.left) queue.push(curr.left);
            if(curr.right)queue.push(curr.right);                
        }
        level++;
    }
    return level;
};
