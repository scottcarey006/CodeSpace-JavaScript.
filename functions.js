// Activity 1 //

const sampleArray = [10, 2, 3, 4, 7];

//  Function to show the array content
function showArray(arr) {
    
    console.log("The content of the array is: [" + arr + "]");
}

// to call it //

showArray([1, 2, 3, 4, 5]);

// Function to find max value //
function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max; 
}

// to call it //

console.log(findMax(sampleArray));

// Activity 2 ////

function factorial(n) {
// handles the negative and zero ///
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    else if (n === 0) {
        return 1;
    }

let result = 1;
// loop fromn 1 to n //
for (let i = 1; i <= n; i++){
result = result * i
}
return result;

}

/// to call it //

console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(-3)); // error message

/// Activity 3 ////

function isPrime(n){
/// deals with the numbers less that or equal to 1 ////
    if (n <= 1) {
        return "Number is not prime";
    }

for (let i = 2; i < n; i++){
    // If divisible → not prime
    if (n % i === 0){
        return "Number is not prime";
    }
}
/// if not divisible = prime ///
return "Number is prime";
}