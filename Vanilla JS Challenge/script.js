// Get the buttons from the HTML using their id
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
// Get elements from the HTML using their id
const resultText = document.getElementById("result");
const userChoiceText = document.getElementById("user-choice");
const compChoiceText = document.getElementById("computer-choice");
// Add a click event to each button
// When the user clicks a button, the playGame function runs
rockBtn.addEventListener("click", function(){
    playGame("rock");
});

paperBtn.addEventListener("click", function(){
    playGame("paper");
});

scissorsBtn.addEventListener("click", function(){
    playGame("scissors");
});
// This function runs the game
// It takes the users choice as a parameter
function playGame(userChoice) {
    // Store the possible computer choices in an array
    const choices = ["rock", "paper", "scissors"];
    // Generate a random number from 0 to 2
    let randomIndex = Math.floor(Math.random()*choices.length);
    // Use the random number to pick an item from the array
    let compChoice = choices[randomIndex];
// Display the user and comp choice on the page
    userChoiceText.textContent = "You chose: " + userChoice;
    compChoiceText.textContent = "Computer chose: " + compChoice;
// Compare the user choice and the computer choice
    if (userChoice === compChoice) {
        resultText.textContent = "The game is a draw"
    } else if (
    (userChoice === "rock" && compChoice === "scissors") || 
    (userChoice === "paper" && compChoice === "rock") || 
    (userChoice === "scissors" && compChoice === "paper")){
        resultText.textContent = "User Wins!"
    } else {
        resultText.textContent = "Sorry! Computer wins!"
    }
}

        







