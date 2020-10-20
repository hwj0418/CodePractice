// Complete the sockMerchant function below.
//https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
var sockMerchant = function (n, ar) {
  const socks = ar.reduce(
    (acc, cur_val) => acc.set(cur_val, (acc.get(cur_val) || 0) + 1),
    new Map()
  );
  let num_paris = 0;
  for (let count_per_color of socks.values()) {
    num_paris += Math.floor(count_per_color / 2);
  }
  return num_paris;
};

// console.log(sockMerchant(9, [10, 20, 20,10,10,30,50,10,20]));

// Complete the jumpingOnClouds function below.
var jumpingOnClouds = function (c) {
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
};

// console.log(jumpingOnClouds([0,0,1,0,0,1,0]));

// Complete the repeatedString function below.
var repeatedString = function (s, n) {
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
};

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

let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

let arr2 = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

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
			if(q[j] > q[i]) swap_count ++;
			// console.log(q[j] > q[i] ? [q[j], q[i]]: swap_count);
    }
  }
  return console.log(swap_count);
}

// console.log(minimumBribes([2, 1, 5, 3, 4]));
// console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));


// Complete the minimumSwaps function below.
function minimumSwaps(arr) {

	let swap_count = 0, i = 0;
	arr = arr.map((num) => num - 1); //[1,2,3,0,4];

	while(i < arr.length){
		// console.log(arr);
		if(arr[i] != i){
			const target_index = arr[i];
			[arr[i], arr[target_index]] = [arr[target_index], arr[i]]
			swap_count ++;
		}else{
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