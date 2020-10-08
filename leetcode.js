class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// let tree = new TreeNode(3, 
//   new TreeNode(9), new TreeNode(20, 
//     new TreeNode(15), new TreeNode(7)));

let tree = new TreeNode(1, new TreeNode(2), null);


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 */
var minDepth = function(root) {
  if(!root) return 0;
  var L = minDepth(root.left), R = minDepth(root.right)
  return 1 + (Math.min(L, R) || Math.max(L, R))
};

console.log(minDepth(tree));
