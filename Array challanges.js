// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

function alwaysHungry(arr) {
    var counter = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            counter++;
        }
    }
    if(counter == 0) {
        console.log("I'm hungry")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);



// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 

// Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    var count = 0
    var avg = sum / arr.length;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 


// Write a function that will reverse the values an array and return them.

function reverse(arr) {
    var first = 0;
    var last = arr.length - 1;
    while(first < last) {
        var temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        first++;
        last--;
    }
    return arr;
}  
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// Write a function that will return an array of Fibonacci numbers up to a given length n. 

function fibonacciArray(n) {
    var fArr = [0, 1];
    while(fArr.length < n) {
        var num1 = fArr[fArr.length-2];
        var num2 = fArr[fArr.length-1];
        fArr.push(num1 + num2);
    }
    return fArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]