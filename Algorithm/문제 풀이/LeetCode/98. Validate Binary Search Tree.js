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
 var isValidBST = function(root) {
    if(root.left === null && root.right === null){
        return true;
    }
    
    if(root.left?.val < root.val && root.right?.val > root.val){
        return isValidBST(root.left) && isValidBST(root.right);
    }else{
        return false;
    }
};