// Activity 1 - Sum values of an array

// Create an array
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Variable to store the sum
let sum = 0;

// Loop through the array
for (let i = 0; i < numbers1.length; i++) {
    sum = sum + numbers1[i];
}

// Print the result
console.log("The sum is " + sum);



// Activity 2 - Average value of an array

// Create an array
const numbers2 = [20, 30, 25, 35, -16, 60, -100];

// Variable to store sum
let total = 0;

// Loop through the array
for (let i = 0; i < numbers2.length; i++) {
    total = total + numbers2[i];
}

// Calculate average
let average = total / numbers2.length;

// Print result
console.log("Average value of the array elements is: " + average);



// Activity 3 - Find max and min values

// Create an array
const numbers3 = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49];

// Assume first value is max and min
let max = numbers3[0];
let min = numbers3[0];

// Loop through the array
for (let i = 1; i < numbers3.length; i++) {

    // Check for max
    if (numbers3[i] > max) {
        max = numbers3[i];
    }

    // Check for min
    if (numbers3[i] < min) {
        min = numbers3[i];
    }
}

// Print results
console.log("Original Array: " + numbers3);
console.log("Maximum value = " + max);
console.log("Minimum value = " + min);