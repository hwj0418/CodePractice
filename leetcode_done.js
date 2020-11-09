class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

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

// console.log(inorderTraversal(tree));

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

// console.log(minDepth(tree));

/**
 * @param {number} x
 * @return {number}
 * https://leetcode.com/problems/reverse-integer/
 */
var reverse = function(x) {
  const sign = x > 0 ? 1 : -1; 
  let temp =  String(Math.abs(x)).split('');
  let strnum = temp.reverse();
  // console.log(strnum);
  let result = sign*Number(strnum.join(''));
  return (result < Math.pow(2, 31) - 1 && result > -1 * Math.pow(2, 31)) ?  result: 0;
    
};

// console.log(reverse(1234));

/**
 * @param {string} s
 * @return {string}
 *https://leetcode.com/problems/longest-palindromic-substring/
 */
var longestPalindrome = function(s) {
  if(s.length <= 1) return s;
  let palindromic = '';
  for(let i = 0; i < s.length; i++){
      for(let j = 0; j < 2; j++){
          var right = i;
          var left = i + j;
          while(s[left] && s[left] == s[right]){
              right ++;
              left --;
          }
          if(palindromic.length < right - left - 1){
              palindromic = s.substring(left+1, right);
          }
      }
  }
  return palindromic;
};

// console.log(
//   longestPalindrome(
//     "aksdjlasjdlajfhhhhhhhhhhhhhhhwqieuqiew"
//   )
// );



/*
 * Complete the 'zeroesToCenter' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function zeroesToCenter(arr) {
  let nums = [],
    zeroes = [];
  arr.forEach(num => {
      num == 0 ? zeroes.push(num) : nums.push(num);
  });
  let mid = Math.floor(nums.length / 2);
  nums.splice(mid, 0, ...zeroes);
  return nums;
}

//   console.log(
//     zeroesToCenter([
//       '6', '7', 0,
//       '7', '8', '10',
//       '11', '12', '13'
//     ])
//   );



/**
 * @param {number} x
 * @return {boolean}
 * https://leetcode.com/problems/palindrome-number/
 */
var isPalindrome = function(x) {
  if(x < 0) return false;
  const strx = new String(x);
  const mid = Math.floor(strx.length/2);
  let left = 0, right = strx.length - 1;
  while(left < right){
      if(strx[left] != strx[right]) return false;
      left++;
      right--;
  }
  return true;
};

// console.log(isPalindrome(10));


/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/string-to-integer-atoi/
 */
var myAtoi = function(s) {
  const digit = "0123456789".split('');
  const op = "+-".split('');
  let num = "", i = 0;
  while(i < s.length){
      if(digit.indexOf(s[i]) >= 0 || (op.indexOf(s[i]) >= 0 && num.length == 0)){
          num += s[i];
          i ++;
      }else if(s[i] == " " && num.length == 0){ //skip white spaces
          i ++;
      }else{
          if(num.indexOf("+") + num.indexOf("-") >= 0 ||// +, - both exist, return 0
          num.indexOf("+") > 0 || // +/- not at the beginnig
          num.indexOf("-") > 0 ||
          isNaN(Number(num))) // + or -only
          return 0; 
          break;
      }
  }
  // console.log(num);
  num = Number(num);
  if(num <= -1 * Math.pow(2, 31)){
      return -1 * Math.pow(2, 31);
  }else if(num >= Math.pow(2, 31) - 1){
      return Math.pow(2, 31) - 1;
  }else{
      return isNaN(num) ? 0 : num;
  }
};

// console.log(myAtoi("-0")); 

/*
 * Complete the 'decryptPassword' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function decryptPassword(s) {
    // Write your code here
    let head = 0, tail = s.length - 1, decrypt = [];
    while(head <= tail){
        if(s[tail] == "*"){
            //swap s[tail-1], s[tail-2]
            decrypt.push(s[tail-2]);
            decrypt.push(s[tail-1]);
            tail -= 3;
        }else if(! isNaN(Number(s[tail]))){
            decrypt.push(s[head]);
            head ++;
            tail --;
        }
        else{
            decrypt.push(s[tail]);
            tail --;
        }
    }
    decrypt.reverse();
    return decrypt.join('');
}

// console.log("pTo*Ta*O\n", decryptPassword("pTo*Ta*O"));


/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/roman-to-integer/
 */
var romanToInt = function (s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    switch (s[i]) {
      case "I":
        s[i + 1] == "V" || s[i + 1] == "X" ? count-- : count++;
        break;

      case "V":
        count += 5;
        break;

      case "X":
        s[i + 1] == "L" || s[i + 1] == "C" ? (count -= 10) : (count += 10);
        break;

      case "L":
        count += 50;
        break;

      case "C":
        s[i + 1] == "D" || s[i + 1] == "M" ? (count -= 100) : (count += 100);
        break;

      case "D":
        count += 500;
        break;

      case "M":
        count += 1000;
        break;

      default:
        break;
    }
  }
  return count;
};

// console.log(romanToInt("III")); // 3
// console.log(romanToInt("IV")); // 4
// console.log(romanToInt("VI")); // 6

/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode.com/problems/container-with-most-water/
 */
var maxArea = function (height) {
  let left = 0, right = height.length - 1;
  let maxArea = -1;
  console.log(height);
  while(left < right){
      console.log(height[left], height[right]);
      if(height[left] < height[right]){
          maxArea = Math.max(height[left]*(right-left) , maxArea);
          left++;
      }else{
          maxArea = Math.max(height[right]*(right-left) , maxArea);
          right--;
      }
  }
  return maxArea;
};

// console.log(maxArea([1,8,6,2,5,4,8,3,7])); //49
// console.log(maxArea([1,1])); //1
// console.log(maxArea([4,3,2,1,4])); //16
// console.log(maxArea([1,3,2,5,25,24,5])); //24
// console.log(maxArea([1,8,6,2,5,4,8,3,7])); //49


/**
 * @param {number} num
 * @return {string}
 * https://leetcode.com/problems/integer-to-roman/
 */
var intToRoman = function (num) {
  //1994 "MCMXCIV"

  const roman_10_denote = [
    "I", // 10**0
    "X", // 10**1
    "C", // 10**2
    "M", // 10**3
  ];
  const roman_5_denote = [
    "V", //5 * 10**0
    "L", //5 * 10**1
    "D" //5 * 10**2
  ];

  let roman = "";
  let i = Math.floor(Math.log10(num));
  while (num > 0) {
    const numi = Math.floor(num / 10 ** i); //1994
    if (numi == 9) {
      roman += roman_10_denote[i] + roman_10_denote[i+1];
    } else if (numi == 4) {
      roman += roman_10_denote[i] + roman_5_denote[i];
    } else if (numi == 5) {
      roman += roman_5_denote[i];
    } else if (numi > 5) {
      const gt5 = numi - 5;
      roman += roman_5_denote[i] + roman_10_denote[i].repeat(gt5);
    } else {
      roman += roman_10_denote[i].repeat(numi);
    }
    console.log(num, numi, i, roman);
    num = num % 10 ** i;
    if(i > 0) i--;
  }

  return roman;
};

// console.log(intToRoman(40)); // M CM XC IV
// console.log(intToRoman(3999)); // MMM CM XC IX

/**
 * @param {string[]} strs
 * @return {string}
 * https://leetcode.com/problems/longest-common-prefix/
 */
var longestCommonPrefix = function (strs) {
  if (strs.length < 1) return "";

  let common_prefix = "";
  let shortest = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < shortest.length) shortest = strs[i];
  }
  let i = 0,
    j = 0;
  while (i < shortest.length) {
    // console.log(strs[j][i], shortest);
		if (strs[j][i] != shortest[i]) break;
		else j++;
    if (j == strs.length) {
      common_prefix += shortest[i];
      j = 0;
      i++;
    }
  }

  return common_prefix;
};

// console.log(longestCommonPrefix(["car", "cir", "c"]));

/**
 * @param {string} s
 * @return {string}
 * https://leetcode.com/problems/make-the-string-great/
 */
var makeGood = function (s) {
  console.log(s);
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] != s[i + 1] && s[i].toUpperCase() == s[i + 1].toUpperCase()) {
      s = s.slice(0, i) + s.slice(i + 2);
      return makeGood(s);
    }
  }

  return s;
};

// console.log(makeGood("leEeetcode"));

/**
 * @param {string} text
 * @return {string}
 * https://leetcode.com/problems/rearrange-words-in-a-sentence/
 */
var arrangeWords = function (text) {
  text = text.split(" ");
  let text_map = new Map();
  text.forEach((word) => {
    const len = word.length;
    text_map.has(len)
      ? text_map.set(len, text_map.get(len) + " " + word.toLowerCase())
      : text_map.set(len, word);
  });

	const text_map_sorted_by_len = new Map([...text_map.entries()].sort((a, b) => {return a[0] - b[0]}));
	
	console.log(text_map_sorted_by_len);

	const sorted_text = [...text_map_sorted_by_len.values()];
	
	console.log(sorted_text);

  let final_text = "";

  while (sorted_text.length > 0) {
    let cur_word = sorted_text.shift();
    // console.log(cur_word);
    if (final_text.length < 1) {
      final_text += cur_word.charAt(0).toUpperCase() + cur_word.slice(1) + " ";
    } else {
      final_text += cur_word.toLowerCase() + " ";
    }
  }

  return final_text.slice(0, final_text.length - 1);
};

// console.log(arrangeWords("Thirty days challengue"));

/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode.com/problems/valid-parentheses/
 */
var isValid = function(s) {

	if(s.length == 0) return true;

	let bracket_stack = [s[0]], i = 1;
	const open_brackets = ["(", "{", "["];
	const close_brackets = [")", "}", "]"];

	while(i < s.length){
		const cur = s[i];
		if(open_brackets.includes(cur)) {
			bracket_stack.push(cur);
		}else{
			const prev = bracket_stack.pop();
			if(close_brackets.indexOf(cur) != open_brackets.indexOf(prev)) return false;
		}
		i++;
	}
	
	return bracket_stack.length == 0;

};

// console.log(isValid("{}"));


/**
 * @param {string} digits
 * @return {string[]}
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */
var letterCombinations = function(digits) {

	let permutation = function(arr){
		if(arr.length == 0) {
			return [];
		}else if (arr.length == 1) {
			return arr[0];
		} else {
			var result = [];
			var allCasesOfRest = permutation(arr.slice(1));  // recur with the rest of array
			for (var i = 0; i < allCasesOfRest.length; i++) {
				for (var j = 0; j < arr[0].length; j++) {
					result.push(arr[0][j] + allCasesOfRest[i]);
				}
			}
			return result;
		}
	};

	let num_map = new Map();
	num_map.set("2", ["a", "b", "c"]);
	num_map.set("3", ["d", "e", "f"]);
	num_map.set("4", ["g", "h", "i"]);
	num_map.set("5", ["j", "k", "l"]);
	num_map.set("6", ["m", "n", "o"]);
	num_map.set("7", ["p", "q", "r", "s"]);
	num_map.set("8", ["t", "u", "v"]);
	num_map.set("9", ["w", "x", "y", "z"]);

	let digits_arr = [];

	for(let i = 0; i < digits.length; i++){
		digits_arr.push(num_map.get(digits[i]));
	}
	console.log(digits_arr);

	return permutation(digits_arr);
};

// console.log(letterCombinations("23"));

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * https://leetcode.com/problems/linked-list-cycle/
 * https://leetcode.com/problems/linked-list-cycle-ii/submissions/ 
 */
var hasCycle = function(head) {

	let visited = [];
	while(head){
	  if(visited.includes(head)){
			return head;
		} 
		visited.push(head);
		head = head.next;
	}

	return null;
    
};

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
var removeNthFromEnd = function (head, n) {
  if (!head.next && n == 1) return null;
  let len = 0,
    temp = head,
    i = 0;
  while (temp.next) {
    len++;
    temp = temp.next;
  }
  temp = head;
  while (temp) {
    if(len - n == -1) return head.next;
    if (i == len - n) {
      temp.next = temp.next.next;
    }
    temp = temp.next;
    i++;
  }
  return head;
};

var mergeTwoLists = function (l1, l2) {
  let head = new ListNode(),
    ptr = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      //l1 = l1 -> l2 -> l1.next ; l2 = l2.next
      ptr.next = l1;
      l1 = l1.next;
    } else {
      ptr.next = l2;
      l2 = l2.next;
    }
    ptr = ptr.next;
  }

  l1 ? (ptr.next = l1) : (ptr.next = l2);

  return head.next;
};

// let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));


// let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// console.log(mergeTwoLists(l1, l2));


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * https://leetcode.com/problems/remove-element/
 */
var removeElement = function(nums, val) {
  let i = 0;
  while(i < nums.length){
    if(nums[i] == val) nums.splice(nums.indexOf(val), 1); 
    i++;
  }
  return nums;

};

// console.log(removeElement([3,2,2,3], 3));

