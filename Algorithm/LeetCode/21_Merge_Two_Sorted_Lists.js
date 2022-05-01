/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let merged = new ListNode();
    let mergedCurr = merged;
    
    while(l1 && l2){
        if(l1.val <= l2.val){
            mergedCurr.next = l1;
            l1 = l1.next;
        }else{
            mergedCurr.next = l2;
            l2 = l2.next;
        }
        mergedCurr = mergedCurr.next;
    }
    
    mergedCurr.next = l1 || l2;
    return merged.next;
};
