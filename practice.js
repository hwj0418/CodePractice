

function UniqueArray(arr){
    let uniqueArray = [];
    for(let i = 0; i < arr.length - 1; i++){
        if(uniqueArray.indexOf(arr[i]) == -1){
            uniqueArray.push(arr[i]);
        } 
    }
    return uniqueArray
}
// console.log("remove dupilicate in arrary", UniqueArray([1,2,3,1,3,2]));

function generateRandomArray(arr=[]){
    if(arr.length == 5){
        return arr;
    }
    let newNum = Math.round(Math.random()*31+1)
    if(arr.indexOf(newNum) == -1){
        arr.push(newNum)
    }
    return generateRandomArray(arr);
}
// console.log("generating a array of 5 random number between 2-32", generateRandomArray([]));


function promise1(){

    //enqueued first, by will wait until Timeout.
    setTimeout(function () {
        console.log(1);
    })

    //enqueued secondly, but this resolve has not been used yet, so nothing will be print.
    Promise.resolve(function () {
        console.log(2);
    })

    //enqueued thirdly, but since this is a promise, so the event loop will wait for its execution.
    new Promise(function (resolve) {
        console.log(3); // therefore it will be print first.
        resolve();
    }) 
    //When the Promise object finish executing, the following .then is enqueued to the event loop
    //However, before it was enqueued, 5 is already in the queue, therefore it will execute after 5
    .then(function () {
        console.log(4) 
    })

    // Enqueued right after the above Promise is enqueued.
    console.log(5);
}
// console.log(promise1());

/**
 * Scope practice - closure
 */
(function outer(x){
    (function inner(x){
        let innerX = 2*x;
        console.log("outer x: " + x); 
        console.log("innerX "+innerX);
    })(x);
    // console.log("try to access innerX: "+innerX);// ReferenceError: innerX is not defined
})(5);

/**
 * a comparison function is only required to return a positive number to say “greater” 
 * and a negative number to say “less”.
 */
(function sort1(arr){
    arr.sort((a,b) => { return a - b; }); //sort in accending order. [ 1, 2, 4, 8, 15 ]
    // arr.sort( (a,b) => {return b - a;}); //sort in decending order. [ 15, 8, 4, 2, 1 ]
    console.log(arr);
})([ 4, 2, 8 ,1, 15 ]);

/**
 *  usage of spread syntax (...)
 * */ 
function sum(...nums){
    return nums.reduce((acc, num) => acc+num, 0);
}
  
const numbers = [1, 2, 3, 4, 5];

console.log(sum(...numbers));



