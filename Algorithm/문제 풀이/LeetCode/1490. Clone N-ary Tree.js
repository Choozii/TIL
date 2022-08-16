/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node|null} node
 * @return {Node|null}
 */
 var cloneTree = function(root) {
    //Tree가 주어졌을 때 deep copy를 리턴하라
    if (!root) return root;
    
    const new_root = new Node(root.val);
    const stack = [[root, new_root]];
    while(stack.length > 0){
        const [old_node, new_node] = stack.pop();
        for (let child_node of old_node.children){
            const new_child_node = new Node(child_node.val);
            new_node.children.push(new_child_node);
            stack.push([child_node, new_child_node]);
        }
    }
    return new_root;
};