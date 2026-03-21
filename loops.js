// Activity 1 - Odd or Even from 0 to 15

// Loop from 0 to 15
for (let i = 0; i <= 15; i++) {

    // Check if the number is even
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}



// Activity 2 - Multiplication Table

// Ask the user for a number
let number = Number(prompt("Input a number:"));

// Loop from 1 to 10
for (let i = 1; i <= 10; i++) {

    // Calculate result
    let result = number * i;

    // Print the multiplication line
    console.log(number + " x " + i + " = " + result);
}