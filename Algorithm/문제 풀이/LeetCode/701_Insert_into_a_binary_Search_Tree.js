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
 * @param {number} val
 * @return {TreeNode}
 */

//solution - recursive
var insertIntoBST = function(root, val){
    if(!root){
       return new TreeNode(val, null, null);
    }
    if(root.val > val)
        root.left = insertIntoBST(root.left, val)
    else root.right = insertIntoBST(root.right, val);
    
    return root;
}


//iterative
var insertIntoBST = function(root, val) {
    let dummy = root;
    const newNode = new TreeNode(val, null, null);
    if(!root) return newNode;

    while(dummy != null){
    if(dummy.val < val) {
        if(dummy.right == null){
            dummy.right = newNode;
            break;
        }
        dummy = dummy.right;
    }else{
        if(dummy.left == null) {
            dummy.left = newNode;
            break;
        }
        dummy = dummy.left;
        }
    }   
    return root;
};
