/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

class ListNode {
  constructor(val, next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
 
var mergeTwoLists = function(l1, l2) {

  let head = new ListNode(), ptr = head;

  while(l1 && l2){
    if(l1.val < l2.val ){ //l1 = l1 -> l2 -> l1.next ; l2 = l2.next
      ptr.next = l1;
      l1 = l1.next;
    }else{
      ptr.next = l2;
      l2 = l2.next;
    }
    ptr = ptr.next;
  }

  l1 ? ptr.next = l1 : ptr.next = l2;

  return head.next;

};

// let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));

// let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// console.log(mergeTwoLists(l1, l2));

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {

  let sorted_head = new ListNode(), sorted_ptr = sorted_head;
  let ptr = head;
  //find minimum node, and append it to new head
  while(ptr){
    //go throught the linked list, find the smallest node
    let ptr = head, min = ptr, prev = head, min_prev = prev;
    while(ptr){
      if(ptr.next && (ptr.next.val < min.val)){
        min_prev = ptr;
        min = ptr.next;
      }else if(ptr.next == null){
        if(ptr.val > min.val){
          min = ptr;
          min_prev = prev;
        }
      }
      prev = ptr;
      ptr = ptr.next;
    }
    //when finding procedure reaches the end
    //swap the marked position with current position
    min_prev.next = min.next;
    min.next = sorted_ptr.next;
    sorted_ptr.next = min;
    //move head to head.next
    head = head.next;
    sorted_ptr = sorted_ptr.next;
  }

  return sorted_head.next;
    
};

let l1 = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))));

console.log(sortList(l1));