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
 var findLeaves = function(root) {
    //leaf node를 tree가 빌 때까지 지움
    //같이 지워지는 node들을 배열로 묶어서 배열로 리턴
    
    let ans = [];
    
    const dfs = (node) => {
        if(node === null) return -1;
        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);
        
        const currentHeight = Math.max(leftHeight, rightHeight) + 1;
    if(!ans[currentHeight]){
        ans[currentHeight] = [];
    }
        ans[currentHeight].push(node.val);
            
    return currentHeight;    
}
    dfs(root);
    return ans;
    
};