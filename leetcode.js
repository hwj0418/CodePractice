

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 */
var removeNthFromEnd = function(head, n) {

	let len = 0, head_holder = head, i++;
	while(head_holder.next){
		head_holder = head_holder.next;
		len++;
	}
	head_holder = head;
	while(head_holder){
		i++;
		if(i == len - n) head_holder.next = head_holder.next.next;
		head_holder = head_holder.next;
	}
	return head
};