/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * https://leetcode.com/problems/reverse-string/
 */
var reverseString = function (s, lo = 0, hi = s.length) {
  if (hi - lo <= 1) {
    return s;
  }
  // let j = 0;
  for (let i = 0; i < Math.floor((hi - lo) / 2); i++) {
    // [s[i],s[hi - j - 1]] = [s[hi - j - 1], s[i]];
    [s[i + lo], s[hi - i - 1]] = [s[hi - i - 1], s[i + lo]];
    // console.log(i+lo, s[i+lo], hi - i - 1, s[hi - i - 1], s.slice(lo, hi));
    // j++;
  }
  return s;
};
// console.log(reverseString(["h","e","l","l","o"]));
// let s = "Do you wanna build a snowman".split("");
// let rs = reverseString(s);
// console.log(rs.join(""));

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * interview question
 */
var reverseSentense = function (s) {
  let lo = 0;
  let hi = s.length;
  s = reverseString(s, lo, hi);
  while (true) {
    hi = s.indexOf(" ", lo);
    if (hi > -1) {
      s = reverseString(s, lo, hi);
      // console.log(lo, hi, s.join(""));
      lo = hi + 1;
    } else {
      s = reverseString(s, lo, s.length);
      break;
    }
  }
  return s;
};
// console.log(reverseSentense("Do you wanna build a snowman".split("")).join(""));

/**
 * @param {string} s
 * @return {string}
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 */
var reverseVowels = function (s) {
  let temp = s.split("");
  let vowels = "aeiouAEIOU";
  let i = 0;
  let j = temp.length - 1;
  while (i < j) {
    // console.log(temp[i], temp[j]);
    if (vowels.indexOf(temp[i]) != -1 && vowels.indexOf(temp[j]) != -1) {
      [temp[i], temp[j]] = [temp[j], temp[i]];
      i++;
      j--;
    } else if (vowels.indexOf(temp[i]) == -1) {
      i++;
    } else if (vowels.indexOf(temp[j]) == -1) {
      j--;
    }
  }
  return temp.join("");
};
// console.log(reverseVowels("Marge, let's \"went.\" I await news telegram.") == "Marge, let's \"went.\" i awaIt news telegram.");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/two-sum/
 */
var twoSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    let temp = nums[i] + nums[j];
    console.log(nums, i, j, temp);
    if (temp == target) {
      return [i, j];
    } else if (temp < target) {
      i++;
    } else {
      j--;
    }
  }
  return [];
};
console.log(twoSum([3, 3, 2, 4], 6));

/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/maximum-subarray/
 */
var maxSubArray = function (nums) {
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    max = Math.max(max, dp[i]);
  }

  return max;
};
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://leetcode.com/problems/3sum/
 *
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let result = [];
  let target = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    if (nums[i] > target) break;
    let lo = i + 1;
    let hi = nums.length - 1;
    while (lo < hi) {
      // console.log(lo, hi, [nums[i], nums[lo], nums[hi]]);
      let sum = nums[i] + nums[lo] + nums[hi];
      if (sum == target) {
        result.push([nums[i], nums[lo], nums[hi]]);
        while (nums[lo] == nums[lo + 1]) lo++;
        lo++;
        while (nums[hi] == nums[hi - 1]) hi--;
        hi--;
      } else if (sum < target) {
        lo++;
      } else {
        hi--;
      }
    }
  }
  return result;
};
// console.log(threeSum([-1,0,1,2,-1,-4]));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * https://leetcode.com/problems/top-k-frequent-elements/
 */
var topKFrequent = function (nums, k) {
  let topKFrequent = [];
  let freq = new Map();
  for (let num of nums) {
    freq.set(num, freq.get(num) ? freq.get(num) + 1 : 1);
  }
  let sortedFreq = new Map([...freq.entries()].sort((a, b) => b[1] - a[1])); //sort by decending order
  // console.log(sortedFreq);
  for (key of sortedFreq.keys()) {
    if (k == 0) break;
    topKFrequent.push(key);
    k--;
  }
  return topKFrequent;
};
// console.log(topKFrequent(["a","a","b","b","c","d","e","e","e"], 2));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 */
var findKthLargest = function (nums, k) {
  // base case: if there is only one element
  if (nums.length == 1) return nums[0];
  // sort nums in decending order
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));

/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/basic-calculator-ii/
 */
var calculate = function (s) {
  //base case
  if (s.length < 1) return Number(s);

  // setup operation notation
  let op = "+-*/".split("");
  let nums = [];
  // remove all space
  s.replace("/ /g", "");
  let num = "";
  for (let i = 0; i < s.length; i++) {
    if (op.indexOf(s[i]) == -1) {
      // if s[i] is a number
      // console.log(s[i]+" is a number", stack);
      num += s[i];
    } else if (op.indexOf(s[i]) > -1) {
      // if s[i] is an operation
      //add num to the stack and then reset num to ''
      // console.log(s[i]+" is a op", stack);
      nums.push(Number(num));
      num = "";
      nums.push(s[i]);
    }
  }
  nums.push(Number(num));
  // console.log(nums);
  let stack = [];
  let i = 0;
  //do the calculation
  while (i < nums.length) {
    let op = nums[i];
    switch (op) {
      case "+":
        i++;
        break;
      case "-":
        stack.push(-nums[i + 1]);
        i += 2;
        break;
      case "*":
        stack.push(stack.pop() * nums[i + 1]);
        i += 2;
        break;
      case "/":
        stack.push(~~(stack.pop() / nums[i + 1]));
        i += 2;
        break;
      default:
        stack.push(nums[i]);
        i++;
        break;
    }
    // console.log(stack);
  }
  return [...stack].reduce((acc, val) => acc + val);
};

// console.log(calculate(" 3/2"));
//"3+2*2"
//"14-3/2"
//"1*2-3/4+5*6-7*8+9/10" -24

/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/basic-calculator/
 */
var calculate = function (s) {
  //first remove all white spaces
  s = s.replace(/\s/g, "");
  //transfer s into a list
  let op = "+-(".split("");
  let exprs = [];
  let num = "";
  for (let i = 0; i < s.length; i++) {
    if (Number(s[i]) >= 0) {
      // if s[i] is a number
      num += s[i];
    } else if (op.indexOf(s[i]) > -1) {
      // if s[i] is an operation
      //add num to the stack and then reset num to ''
      if (num.length > 0) {
        exprs.push(Number(num));
        num = "";
        exprs.push(s[i]);
      } else {
        exprs.push(s[i]);
      }
    } else if (s[i] == ")") {
      //when see a ")", start to count backwords

      if (num.length > 0) {
        exprs.push(Number(num));
        num = "";
      }
      // console.log("reaches a close bracket", exprs, s.slice(i));
      let temp = [];
      for (let j = exprs.length - 1; j >= 0; j--) {
        if (exprs[j] == "(") {
          // console.log("reaches a open bracket ", temp, exprs, s.slice(i));
          temp.push(exprs[j + 1]);
          sum = temp.reduce((acc, val) => acc + val);
          exprs = exprs.slice(0, j);
          exprs.push(sum);
          break;
        } else if (exprs[j] == "+") {
          temp.push(exprs[j + 1]);
        } else if (exprs[j] == "-") {
          temp.push(-exprs[j + 1]);
        }
      }
    }
  }
  if (num.length > 0) exprs.push(Number(num));
  // console.log("finally: ", exprs);
  let res = exprs[0];
  for (let i = 1; i < exprs.length; i++) {
    if (exprs[i - 1] == "+") {
      res += exprs[i];
    } else if (exprs[i - 1] == "-") {
      res -= exprs[i];
    }
  }
  return res;
};

//   console.log(calculate(" 2-1 + 2 "));
//" 2-1 + 2 " -> 3
//"2 - (10-(8-2)) - (3+1)" -> 0
// " 2 - (10+(8 + 2)) + (3+1)" -> -14
//"2-(5-6)" ->  3
//" 2-1 + 2 " -> 3
//"2-4-(8+2-6+(8+4-(1)+8-10))" -> -15

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4)));

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
 * @return {number[]}
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 */
var inorderTraversal = function (root, res = []) {
  // console.log(res, root);
  if (!root) return;
  inorderTraversal(root.left, res);
  res.push(root.val);
  inorderTraversal(root.right, res);

  return res;
};

console.log(inorderTraversal(tree));

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
 * @return {boolean}
 * https://leetcode.com/problems/validate-binary-search-tree/
 */
var isValidBST = function(root, minVal, maxVal) {
  if (root == null) return true;
  if (root.val >= maxVal || root.val <= minVal) return false;
  return isValidBST(root.left, minVal, root.val) && isValidBST(root.right, root.val, maxVal);
}

console.log(isValidBST(tree));

/**
 * @param {number[]} prices
 * @return {number}
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
var maxProfit = function(prices) {
  let buy = prices[0];
  // let day = 0;
  let maxProfit = 0;
  for(let i = 1; i < prices.length; i++){
    let temp = prices[i] - buy;
    if(temp > maxProfit){
      maxProfit = temp;
    }
    if(prices[i] < buy){
      buy = prices[i];
      // day = i;
    }
  }
  return maxProfit;
};

// console.log(maxProfit([7,6,4,3,1]));

/**
 * @param {number[]} prices
 * @return {number}
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 */
function maxProfit(prices) {
  var buy = -Number.MAX_VALUE;
  var cooldown = 0;

  

  return prices.reduce((sell, price) => {
     buy = Math.max(buy, cooldown - price);
     cooldown = Math.max(cooldown, sell);
     return Math.max(sell, buy + price);
  }, 0);
}

// console.log(maxProfit([1,2,3,0,2]));

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
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */
var maxDepth = function(root) {
  if(!root) return 0;
  return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right))
};

// console.log(maxDepth(tree));

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
 * @return {boolean}
 * https://leetcode.com/problems/balanced-binary-tree/
 */
var isBalanced = function(root) {
  if(!root) return true;
  var maxDepth = function(root) {
    if(!root) return 0;
    return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right))
  };  
  if(Math.abs(maxDepth(root.left)-maxDepth(root.right)) > 1) return false;
  return isBalanced(root.right) && isBalanced(root.left);
  
};

// console.log(isBalanced(tree));