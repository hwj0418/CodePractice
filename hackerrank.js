// Complete the sockMerchant function below.
//https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
function sockMerchant(n, ar) {
  const socks = ar.reduce(
    (acc, cur_val) => acc.set(cur_val, (acc.get(cur_val) || 0) + 1),
    new Map()
  );
  let num_paris = 0;
  for (let count_per_color of socks.values()) {
    num_paris += Math.floor(count_per_color / 2);
  }
  return num_paris;
}
// console.log(sockMerchant(9, [10, 20, 20,10,10,30,50,10,20]));

// Complete the jumpingOnClouds function below.

function jumpingOnClouds(c) {
  let jump = 0,
    i = 0;
  console.log(c);
  while (i < c.length - 1) {
    if (c[i + 2] != 1) {
      //[0,1,0,1,...]
      console.log("jump 2", i);
      jump++;
      i += 2;
    } else {
      //[0,0,1,...]
      console.log("jump 1", i);
      jump++;
      i += 1;
    }
  }
  return jump;
}

// console.log(jumpingOnClouds([0,0,1,0,0,1,0]));

// Complete the repeatedString function below.
function repeatedString(s, n) {
  const repeat = Math.floor(n / s.length),
    remainder = n % s.length;
  let count = 0,
    remainder_count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "a") count++;
  }
  for (let i = 0; i < remainder; i++) {
    if (s[i] == "a") remainder_count++;
  }
  return count * repeat + remainder_count;
}
// console.log(repeatedString("aa", 10000001));

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */
function countingValleys(steps, path) {
  // Write your code here
  let count = 0,
    level = 0;
  for (let i = 0; i < steps; i++) {
    path[i] == "U" ? level++ : level--;
    console.log(level);
    if (level == 0 && path[i] == "U") count++;
  }
  return count;
}
// console.log(countingValleys(8, "UDDDUDUU".split('')));

//https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function hourglassSum(arr) {
  console.table(arr);
  let subArraySum = function (arr) {
    let sum = 0;
    for (let i = 0; i < 3; i++) {
      if (i != 1) {
        for (let j = 0; j < 3; j++) {
          sum += arr[i][j];
        }
      } else {
        sum += arr[1][1];
      }
    }
    return sum;
  };

  let sub_arr_sum = [];
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      const row1 = arr[i - 1].slice(j - 1, j + 2);
      const row2 = arr[i].slice(j - 1, j + 2);
      const row3 = arr[i + 1].slice(j - 1, j + 2);
      const sub_arr = [row1, row2, row3];
      //pass sub_arr to helper function
      const sub_sum = subArraySum(sub_arr);
      // console.log(i, j);
      // console.table(sub_arr);
      // console.log(sub_sum);
      sub_arr_sum.push(sub_sum);
    }
  }

  // console.log(sub_arr_sum);

  return Math.max(...sub_arr_sum);
}
// let arr = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0],
// ];
// let arr2 = [
//   [-9, -9, -9, 1, 1, 1],
//   [0, -9, 0, 4, 3, 2],
//   [-9, -9, -9, 1, 2, 3],
//   [0, 0, 8, 6, 6, 0],
//   [0, 0, 0, -2, 0, 0],
//   [0, 0, 1, 2, 4, 0],
// ];
// console.log(hourglassSum(arr));

// Complete the rotLeft function below.
//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen

function rotLeft(a, d) {
  const remainder = d % a.length; // determined how many elements needs to be moved.
  const temp = a.slice(0, remainder);
  a = a.slice(remainder);
  a.push(...temp);
  return a;
}
// console.log(rotLeft([1,2,3,4,5], 5));

// Complete the minimumBribes function below.
//https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function minimumBribes(q) {
  let swap_count = 0;
  q = q.map((num) => num - 1);
  // console.table(q);
  for (let i = 0; i < q.length; i++) {
    if (q[i] - i > 2) {
      return console.log("Too chaotic");
    }

    for (let j = Math.max(q[i] - 1, 0); j < i; j++) {
      if (q[j] > q[i]) swap_count++;
      // console.log(q[j] > q[i] ? [q[j], q[i]]: swap_count);
    }
  }
  return console.log(swap_count);
}
// console.log(minimumBribes([2, 1, 5, 3, 4]));
// console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));

// Complete the minimumSwaps function below.

function minimumSwaps(arr) {
  let swap_count = 0,
    i = 0;
  arr = arr.map((num) => num - 1); //[1,2,3,0,4];

  while (i < arr.length) {
    // console.log(arr);
    if (arr[i] != i) {
      const target_index = arr[i];
      [arr[i], arr[target_index]] = [arr[target_index], arr[i]];
      swap_count++;
    } else {
      i++;
    }
  }

  return swap_count;
}
// console.log(minimumSwaps([2, 3, 4, 1, 5]));
// console.log(minimumSwaps([4, 3, 1, 2]));
/**
 * [4, 3, 1, 2] go
 * [2, 3, 1, 4] 1
 * [3, 2, 1, 4] 2
 * [1, 2, 3, 4] 3
 */

// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
function checkMagazine(magazine, note) {
  const magazine_map = magazine.reduce(
    (map, word) => map.set(word, (map.get(word) || 0) + 1),
    new Map()
  );
  for (let word of note) {
    // console.log(word, magazine_map);
    const word_count = magazine_map.get(word);
    if (!word_count) {
      return console.log("No");
    } else {
      magazine_map.set(word, magazine_map.get(word) - 1);
    }
  }
  return console.log("Yes");
}
// console.log(
//   checkMagazine(
//     "two times three is not four".split(" "),
//     "two times two is four".split(" ")
//   )
// );

/*
 *https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 **/
function twoStrings(s1, s2) {
  const s_set =
    s1.length < s2.length ? new Set(s1.split("")) : new Set(s2.split("")); //make the one has shorter len map
  const s = s1.length < s2.length ? s2 : s1;
  console.log(s1.length, s1, s2.length, s2, s_set, s1.length < s2.length);
  for (const c of s) {
    if (s_set.has(c)) return "YES";
  }

  return "NO";
}
// console.log(twoStrings("writetoyourparents", "fghmqzldbc"));

//https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
function sherlockAndAnagrams(s) {
  let word_map = new Map(),
    all_possible_substrings = new Set(),
    word_len = 1,
    i = 0,
    count = 0;
  const max_word_len = s.length - 1;
  while (word_len <= max_word_len) {
    if (i == s.length) {
      i = 0;
      word_len++;
    }
    const word = s.slice(i, i + word_len);
    console.log(word);
    // if(!all_possible_substrings.has(word)) all_possible_substrings.add(word);
    i++;
  }
}
// console.log(sherlockAndAnagrams("abba"));

// Complete the countTriplets function below.
//https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
function countTriplets(arr, r) {
  // console.log(arr, r);
  let count = 0,
    gs_map = new Map();

  let factorial = function (num) {
    return num > 0 ? num * factorial(num - 1) : 1;
  };

  let combination = function (n, r) {
    return Math.floor(factorial(n) / (factorial(r) * factorial(n - r)));
  };

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    gs_map.set(cur, (gs_map.get(cur) || 0) + 1);
  }
  console.log(gs_map);
  for (let r1 of gs_map.keys()) {
    const r2 = r1 * r,
      r3 = r1 * r * r;
    if (r1 < r2 && gs_map.has(r2) && gs_map.has(r3)) {
      count +=
        gs_map.get(r1) * Math.max(gs_map.get(r1 * r), gs_map.get(r1 * r * r));
    } else {
      count += combination(gs_map.get(r1), 3);
    }
  }

  return count;
}
// console.log(countTriplets([1,3,9,9,27,81], 3));
// console.log(countTriplets([1,2,2,4], 2));
// let k = new Array(100); //161700
// console.log(countTriplets(k.fill(1), 1));

function factorial(num) {
  return num > 0 ? num * factorial(num - 1) : 1;
}
function combination(n, r) {
  return Math.floor(factorial(n) / (factorial(r) * factorial(n - r)));
}
// console.log(combination(100, 3));

// Complete the freqQuery function below.
function freqQuery(queries) {
  let freq_map = new Map(),
    query_res = [];
  queries.forEach((query) => {
    //O(n)
    const data = query[1];
    switch (query[0]) {
      case 1: //insert
        freq_map.set(data, (freq_map.get(data) || 0) + 1);
        break;
      case 2: //delete
        if (freq_map.has(data)) {
          const data_freq = freq_map.get(data);
          data_freq > 1
            ? freq_map.set(data, data_freq - 1)
            : freq_map.delete(data);
        }
        break;
      case 3: //check freq == data ? print 1 : print 0
        // console.log([ ... freq_map.values()]);
        [...freq_map.values()].find((v) => v == data)
          ? query_res.push(1)
          : query_res.push(0);
        break;

      default:
        break;
    }

    // console.log(query[0], data, freq_map);
  });

  return query_res;
}
// console.log(freqQuery([
//   [1, 5],
//   [1, 6],
//   [3, 2],
//   [1, 10],
//   [1, 10],
//   [1, 6],
//   [2, 5],
//   [3, 2]]));

function countSwaps(a) {
  let swap_count = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swap_count++;
      }
    }
  }

  return (
    "Array is sorted in " +
    swap_count +
    "swaps.\nFirst Element: " +
    a[0] +
    "\nLast Element: " +
    a[a.length - 1]
  );
}

// console.log(countSwaps([3,2,1]));

function maximumToys(prices, k) {
  prices = prices.sort((a, b) => a - b);
  let num_toy = 0;
  while (k >= prices[num_toy]) {
    k -= prices[num_toy];
    num_toy++;
  }
  return num_toy;
}

// console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
// console.log(maximumToys([1, 2,3,4], 6));

// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
  console.log(expenditure);
  let i = d,
    notification_count = 0;
  const lookback_median = Math.floor(d / 2);
  let lookback = expenditure.slice(0, d).sort();
  while (i < expenditure.length) {
    // console.log(expenditure[i], lookback, lookback[lookback_median]);
    if (2 * lookback[lookback_median] <= expenditure[i]) notification_count++;
    lookback.shift();
    if (expenditure[i] > lookback[0]) lookback.push(expenditure[i]);
    if (expenditure[i] < lookback[d - 1]) lookback.sort((a, b) => a - b);
    i++;
  }
  return notification_count;
}

// console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
  let long = [],
    short = [];
  if (a.length > b.length) {
    long = a.split("");
    short = b.split("");
  } else {
    long = b.split("");
    short = a.split("");
  }
  let commond_count = 0,
    i = 0;
  while (i < short.length) {
    if (long.includes(short[i])) {
      long.splice(long.indexOf(short[i]), 1);
      commond_count++;
    }
    i++;
  }
  return short.length + long.length - commond_count;
}

// console.log(makeAnagram("abc", "abc"));
// console.log(makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke"));

function alternatingCharacters(s) {
  let delete_count = 0;
  for (let i = 0; i < s.length - 1; i++) {
    let cur = s[i];
    console.log(cur, s[i + 1]);
    if (cur == s[i + 1]) delete_count++;
  }

  return delete_count;
}

// console.log(alternatingCharacters("AAAA"));

function toWord2(num) {
  if (num < 0) return "input must be positive integer";
  if ((num.toString()).length > 15) return "too big";
  const within20 = [
    " ",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];

  if (num < 20) return within20[num - 1];
  let word = "";
  const th = [
    "",
    "",
    "twenty ",
    "thirty ",
    "forty ",
    "fifty ",
    "sixty ",
    "seventy ",
    "eighty ",
    "ninety ",
  ];
  const unit = [
    "",
    "",
    "hundred ", //10**2
    "thousand ",//10**3
    "",
    "", 
    "million ",//10**6
    "",
    "", 
    "billion ",//10**9
    "",
    "", 
    "trillion ", //10**12
  ];

  let cur_unit_index = Math.floor(Math.log10(num));
  let divider = Math.pow(10, cur_unit_index -1);
  while (cur_unit_index > 0) { 
    const digit = num > 100? Math.floor(num / divider) : num;
    // console.log("num", num, "unit", cur_unit_index);
    if (digit < 20 && digit < 100) {
      word += within20[digit] + unit[cur_unit_index];
      // console.log("adding ", digit, word);
    } else if(digit < 100){
      word += th[Math.floor(digit / 10)];
      if (digit % 10 > 0) word += within20[digit % 10];
      word += unit[cur_unit_index];
      // console.log("adding ", digit, word);
    }else{
      const hundred = Math.floor(digit / 100);
      word += within20[hundred] + "hundred "
      let d2 = (digit % 100) / 10;
      if(d2 < 20){
        d2 = within20[d2];
        word += d2;
      }else{
        word += th[Math.floor(d2 / 10)];
        if (Math.floor(d2 / 10) % 10 > 0) word += within20[Math.floor(d2 / 10) % 10];
        word += unit[cur_unit_index];
      }
    }
    
    if(cur_unit_index % 3 == 0 && cur_unit_index > 3){
      num = num % (divider);
      cur_unit_index -= 3;
    }else{
      num = num % divider;
      cur_unit_index -= 1;
    }
    divider = Math.pow(10, cur_unit_index > 3 ? cur_unit_index - 1:cur_unit_index);
  
  }

  return word;
}

function toWord(num){
  if (num == 0) return "Zero";
  if (num.toString().length > 15) return "too big";
  const lt20 = [
    "",
    "One ",
    "Two ",
    "Three ",
    "Four ",
    "Five ",
    "Six ",
    "Seven ",
    "Eight ",
    "Nine ",
    "Ten ",
    "Eleven ",
    "Twelve ",
    "Thirteen ",
    "Fourteen ",
    "Fifteen ",
    "Sixteen ",
    "Seventeen ",
    "Eighteen ",
    "Nineteen ",
  ];
  const tens = [
    "",
    "",
    "Twenty ",
    "Thirty ",
    "Forty ",
    "Fifty ",
    "Sixty ",
    "Seventy ",
    "Eighty ",
    "Ninety ",
  ];
  const unit = [
    "",
    "",
    "Hundred ", //10**2
    "Thousand ",//10**3
    "",
    "", 
    "Million ",//10**6
    "",
    "", 
    "Billion ",//10**9
    "",
    "", 
    "Trillion ", //10**12
  ];

  let unit_denote = '123', i = 0, word='', num_holder = '', unit_index = Math.floor(Math.log10(num));
  while(num > 0){

    while((unit_denote = unit[unit_index]) == '' && unit_index > 0) unit_index--;
    

    let divider = Math.pow(10, unit_index); 
    let digit = Math.floor(num / divider);
    console.log(digit, unit_denote);
    //from here, work with digit
    if(digit < 20){
      num_holder = lt20[digit];
    }else{
      let d3 = Math.floor(digit/100); //1 0
      console.log("d3", d3);
      d3 = d3 > 0 ? lt20[d3] + "Hundred " : "";
      let d2 = digit % 100; //23, 23
      d2 = d2 < 20 ? lt20[d2]: tens[Math.floor(d2/10)] + lt20[d2 %10];
      console.log("d2", d2);
      num_holder = d3 + d2;
    }

    word += num_holder + (num_holder ? unit_denote : "");
    num = num % divider;
    unit_index--;

  }
  return word.slice(0, word.length-1);

}

console.log(toWord(100000)); //1,234,567,89
// console.log(inWords(1234567));


/**
 * @param {character[][]} grid
 * @return {number}
 * https://leetcode.com/problems/number-of-islands/
 */
var numIslands = function(grid) {
    
  let near_islands = function (i, j) {
    return (
      Number(grid[i - 1][j - 1]) + Number(grid[i - 1][j]) + Number(grid[i - 1][j + 1]) +
      Number(grid[i][j - 1]) + Number(grid[i][j + 1]) +
      Number(grid[i + 1][j - 1]) + Number(grid[i + 1][j]) + Number(grid[i + 1][j + 1])
    );
  };

  let num_islands = 0;
  
  for(let i = 1; i < grid.length - 1; i ++){
      for(let j = i+1; j < grid.length - 1; j++){
          num_islands += near_islands(i, j);
      }
  }
  
  return num_islands;
};

// console.log(numIslands([
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]));

const lt20 = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fivteen",
  "seventeen",
  "eighteen",
  "ninteen",
];