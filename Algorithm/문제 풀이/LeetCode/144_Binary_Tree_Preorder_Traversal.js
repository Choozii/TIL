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
 * @return {number[]}
 */
// var preorderTraversal = function(root) {
//     if(!root) return [];
//     let ans = [];
//     let stack = [root,];

//     while(stack.length){
//         const node = stack.pop();
//         console.log(JSON.stringify(node));
//         ans.push(node.val);
        
//         if(node.right) stack.push(node.right);
//         if(node.left) stack.push(node.left);
//     }
//     return ans;
// };


//recursive

var preorderTraversal = function(root, ans=[]){
    if(!root) return [];
    ans.push(root.val);
    if(root.left) preorderTraversal(root.left, ans);
    if(root.right) preorderTraversal(root.right, ans);
    return ans;
}
