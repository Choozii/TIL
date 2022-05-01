/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let prev = new ListNode(-Infinity, head);
    let curr = head;
    while(curr){
        if(curr.val === val){
            if(prev.val === -Infinity) head = head.next;
            prev.next = curr.next;
        }else{
            prev = prev.next;
        }
        curr = curr.next;
    }
    
    return head;
};




// discuss에서 찾은 solution이 더 간결해보여서 추가/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode();
    let curr = dummy;
    while(head){
        if(head.val !== val){
            curr.next = head;
            curr = curr.next;
        }
        head = head.next;
    }
    curr.next = null;
    return dummy.next;
};
