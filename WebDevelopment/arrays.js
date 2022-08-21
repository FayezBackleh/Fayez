function alwaysHungry(arr) {
    // your code here
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("Yummy,")
            counter++;
        }
    }
    if (counter == 0) {
        console.log("Iam Hungry");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);


function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

function betterThanAverage(arr) {
    var sum = 0;
    var numofelements = 0;
    avg = 0;
    var counter = 0;
    numofelements = (arr.length);

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / numofelements;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            counter++;
        }
    }
    return counter;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);


function reverse(arr) {

    var reversedArr = [];
    for (var i = (arr.length) - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);


function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while (fibArr.length < n) {
        var prev = fibArr[fibArr.length - 1];
        var prevprev = fibArr[fibArr.length - 2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
