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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let q = [root, ];
    let ans = [];
    while(q.length>0){
        let inner_level = []
        let qLength = q.length;
        for(let i=0;i<qLength;i++){
           let node = q.shift();
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
            inner_level.push(node.val);
        }
        ans.push(inner_level);
    }
    return ans;
};
