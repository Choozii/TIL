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
 * @return {boolean}
 */
// var isSymmetric = function(root) {
//     let queue = [root, root];
    
//     while(queue.length){
//         let left_node = queue.shift();
//         let right_node = queue.shift();
//         if(!left_node && !right_node) continue;
//         if(!(left_node && right_node)) return false;
//         if(left_node.val !== right_node.val) return false;
        
//         queue.push(left_node.left, right_node.right);
//         queue.push(left_node.right, right_node.left);
//     }
//     return true;
// };

var isSymmetric = function(root) {
    const isSymmetricRecursive = (root1, root2) => {
        if(root1 == null && root2 == null) return true;
        else if(root1 == null || root2 == null) return false;
        else if(root1.val != root2.val) return false;
        
        return isSymmetricRecursive(root1.left, root2.right) && isSymmetricRecursive(root1.right, root2.left)
    }
    
    return isSymmetricRecursive(root, root);
    
}
