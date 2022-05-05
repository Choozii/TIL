
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    
    if(root.left == null && root.right == null){
        return targetSum == root.val ? true : false;
    }
    
   return hasPathSum(root.left, targetSum-root.val) || hasPathSum(root.right, targetSum-root.val);
};
