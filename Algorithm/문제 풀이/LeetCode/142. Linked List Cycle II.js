/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    //cycle이 시작되는 노드 반환
    //cycle이 없는 그래프라면 return null
    
    //cycle : next 포인터를 따라 갔을 때 다시 도착하면 싸이클로 분류
    const set = new Set();
    let dummy = head;
    while(dummy !== null){
        if(set.has(dummy)) 
            return dummy;
        set.add(dummy);
        dummy = dummy.next;
    }
    return null;
};