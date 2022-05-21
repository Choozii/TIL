/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const recursive = (root, traversal) => {
        if(root == null || root == undefined) return ;
        traversal.push(root.val);
        for(let i=0;i<root.children.length;i++){
        recursive(root.children[i], traversal);
    }
        return traversal;
    }
    if(!root) return [];
     return recursive(root, []);
};

