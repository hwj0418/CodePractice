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

let l1 = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))));
let l2 = new ListNode(1, new ListNode(2, new ListNode(3)));


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

// console.log(sortList(l2));

/**
 * @param {number[][]} intervals
 * @return {number[]}
 * https://leetcode.com/problems/find-right-interval/
 */
var findRightInterval = function (intervals) {
  if (intervals.length <= 1) return [-1];

  const n = intervals.length;

  for(let i = 0; i < n; i++){
    const start_point = intervals[i][1];
    let temp = intervals.slice();
    temp.splice(i, 1);
    for(let j = 0; j < n-1; j++){
      if(intervals[j][0] >= start_point && intervals[j][0] < min_val) min_j = j;
    }
  }
};

// console.log(
//   findRightInterval([
//     [2, 3],
//     [1, 4],
//     [3, 4],
//   ])
// );



/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * https://leetcode.com/problems/next-permutation/
 */
var nextPermutation = function(nums) {

  //check if the nums already in decreasing order or has length = 1
  if(nums.length == 1) return nums;
  let descNums = nums.slice();
  descNums.sort((a, b) => b-a);
  if(Json.stringify(nums) == Json.stringify(descNums)) return nums;

  let i = 1, n = nums.length;
  //find the next non-max number
  while(i < n && nums[i] != Math.max(nums)) i++;
  //find the min number that's greater than the second number
  let rest_nums = nums.slice(), j = i+1;
  while(j < n){
    //TODO
    // if(rest_nums[j] == Math.min(rest_nums) && rest_nums[j] <= nums[i]) rest_nums
  }
  //swap them
  
};

console.log(nextPermutation([1,1,5,1,2,3])); // [1,2,5,1,1,3];