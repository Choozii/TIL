/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const queue = [root];
    const set = new Set();
    
    while(queue.length > 0){
        const curr = queue.shift();
        console.dir(curr)
        if(set.has(k - curr.val)) return true;
        set.add(curr.val);
        if(curr.right) queue.push(curr.right);
        if(curr.left) queue.push(curr.left);
    }
    
    return false;
};
