//write a function that where there is "food" it comes back with "yummy". If "food" wasn't present in the array, console.log "I'm hungry" once.

function alwaysHungry(arr){
    for(var i = 0; i < arr.length; i ++){
        var food = "";
        if(arr[i] === "food"){
            food = food + "yummy ";
        }
        console.log(food);
    }
}
var areYouHungry = alwaysHungry([3.14, "food", "pie", true, "food"]);
console.log(areYouHungry);

//Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
function highPass(arr, cutoff){
    var filteredArr = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);



// use a for loop to count the number numbers in the array
//check if the number is higher than the final number sum/#of numbers in array


function betterThanAverage(arr){
    var sum= 0;
    var count = 0;
    var avg = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    sum = Math.floor(sum/arr.length);
    for(var a = 0; a < arr.length; a++){
        if(arr[a] > sum){
        // console.log(sum);
        count++;
      // console.log(count);
        }
    }
    return count;
}


    var result = betterThanAverage([6,8,3,10,-2,5,9])
    console.log(result);


    function reverse(arr) {
    var temp;
    //iterate through *half* the array (otherwise you'll swap each value twice)
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
      temp = arr[i]; //store first value
      arr[i] = arr[arr.length - 1 - i]; //swap first with last
      arr[arr.length - 1 - i] = temp; //swap last with first
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var i = 0; i < n - 2; i++){
        fibArr.push(fibArr[i]+fibArr[i+1]);
    }
    // your code here
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result);
// we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
