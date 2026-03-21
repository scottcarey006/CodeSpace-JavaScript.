// Activity 1 - Check if numbers are equal or different

// Get input from the user
let num1 = Number(prompt("Input first number:"));
let num2 = Number(prompt("Input second number:"));
let num3 = Number(prompt("Input third number:"));

// Check conditions
if (num1 === num2 && num2 === num3) {
    console.log("All numbers are equal");
} else if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
    console.log("All numbers are different");
} else {
    console.log("Neither all are equal or different");
}



// Activity 2 - Check order of numbers

// Get input from the user
let a = Number(prompt("Input first number:"));
let b = Number(prompt("Input second number:"));
let c = Number(prompt("Input third number:"));

// Check order
if (a < b && b < c) {
    console.log("Increasing order");
} else if (a > b && b > c) {
    console.log("Decreasing order");
} else {
    console.log("Neither increasing or decreasing order");
}