/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    
    const queue = [cloned];
    while(queue.length > 0){
        const curr = queue.shift();
        // console.dir(target);
        if(curr.val == target.val) return curr;    
        
        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);
    }
};
