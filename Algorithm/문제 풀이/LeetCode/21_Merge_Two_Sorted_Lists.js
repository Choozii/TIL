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
 var mergeTwoLists = function(list1, list2) {
    let merged = new ListNode(null);
    let traversal = merged;
    
    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            traversal.next = list1;
            traversal = traversal.next;
            list1 = list1.next;
        }else{
            traversal.next = list2;
            traversal = traversal.next;
            list2 = list2.next;
        }
    }
    if(list1 !== null) traversal.next = list1;
    if(list2 !== null) traversal.next = list2;
    
    return merged.next;
};


