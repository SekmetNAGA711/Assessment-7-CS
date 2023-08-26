const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


// Results for the extraLargeArray
// insert 770.901375 ms
// append 4.268042 ms

// Results for the LargeArray
// insert 6.557084 ms
// append 407.333 μs

// Results for the mediumArray
// insert 136.209 μs
// append 87.834 μs

// Results for the smallArray
// insert 33.25 μs
// append 62.125 μs

// Results for the tinyArray
// insert 17.292 μs
// append 50.375 μs



console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

/* DoublerAppend- Overall time complexity is O(n). 
DoublerInsert-  Overal time complexity is O(n^2).

-The time taken by both functions increases based on the input array size
but the rate of increase for DoublerInsert will be significantly larger compared to 
DoublerAppend.

-Scaling: The time taken by DoublerAppend will grow in direct proportion to the input size 
(linear time complexity O(n)),but DoublerInsert scales quadratically (quadratic time complexity
O(n^2)), the time taken grows with the square of the input size.

-Which function scales better? DoublerAppend scales much better than DoublerInsert.

How can you tell? If we plot the execution times on a graph with input 
size on the x-axis and time on the y-axis, DoublerAppend produces a straight 
line (linear growth), while DoublerInsert would produce a quadratic growth.
 As the input size grows, the performance gap between these two functions will widen dramatically, 
 with DoublerInsert taking exponentially more time than DoublerAppend.

   */