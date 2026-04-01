// Get the buttons from the HTML using their id
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
// Get the result paragraph so we can update the text later
const resultText = document.getElementById("result");
// When the rock button is clicked
rockBtn.addEventListener("click", function(){
    // Store all possible choices in an array
   const choices = ["rock", "paper", "scissors"];
    // Set the users choice (because they clicked rock
    let userChoice = "rock";
    // Generate a random index number (0–2)
    let randomIndex = Math.floor(Math.random()*choices.length);
      // Use the random index to select the computer's choice
    let compChoice = choices[randomIndex];
    // Compare the computer's choice to determine the result
    if (compChoice === "rock") {
        resultText.textContent = "The game is a draw! Try again!"
    } else if (compChoice === "scissors") {
        resultText.textContent = "User Wins!!"
    } else {
        resultText.textContent = "Computer Wins. Bad Luck :("
    }
});

paperBtn.addEventListener("click", function(){
    const choices = ["rock", "paper", "scissors"];
    let userChoice = "paper";
    let randomIndex = Math.floor(Math.random()*choices.length);
    let compChoice = choices[randomIndex];

    if (compChoice === "paper") {
        resultText.textContent = "The game is a draw! Try again!"
    } else if (compChoice === "rock") {
        resultText.textContent = "User Wins!!"
    } else {
        resultText.textContent = "Computer Wins. Bad Luck :("
    }
});

scissorsBtn.addEventListener("click", function(){
   const choices = ["rock", "paper", "scissors"];
    let userChoice = "scissors";
    let randomIndex = Math.floor(Math.random()*choices.length);
    let compChoice = choices[randomIndex];

    if (compChoice === "scissors") {
        resultText.textContent = "The game is a draw! Try again!"
    } else if (compChoice === "paper") {
        resultText.textContent = "User Wins!!"
    } else {
        resultText.textContent = "Computer Wins. Bad Luck :("
    }
});
