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
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 * TODO
 */
var sortList = function (head) {
  let head_holder = new ListNode(null),
    head_ptr = head_holder,
    prev = head,
    min = prev.next,
    min_p = prev;

  while (head) {
    if (!prev.next) {
      min_p.next = min.next;
      // min.next = null;
      head_ptr.next = min;
      head_ptr = head_ptr.next;
      prev = head;
    }

    if (prev.next.val < min.val) {
      min_p = prev;
      min = prev.next;
    }
    prev = prev.next;
  }

  return head_holder.next;
};

// let l1 = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))));
// let l2 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
// console.log(sortList(l2));

