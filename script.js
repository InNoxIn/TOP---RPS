
// Remember to commit early and often! To refresh your memory, check out the commit messages lesson.

// Step 1: Setup the project structure
// Create a new Git repository for your project.
// Create a blank HTML document with a script tag.
// Check if JavaScript is linked correctly:
// Write console.log("Hello World") in JavaScript.
// Check if “Hello World” is logged in the browser console once you open your webpage.
// It’s best practice to link to an external JavaScript file inside this script tag. Using an external JavaScript file keeps your HTML file clean and organized.

// You don’t have to write additional code in the HTML file. This game is played entirely via the console.

// Step 2: Write the logic to get the computer choice

let humanScore = 0;
let computerScore = 0;
let choice;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        choice = "Rock";
    } else if (computerChoice === 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    console.log("Computer's choice is: " + choice);
}

let humanChoice;
function getHumanChoice() {
    let answer = prompt("Please type in Rock, Paper or Scissors").toLowerCase();
    if (answer === "rock") {
        humanChoice = "Rock";
    } else if (answer === "paper") {
        humanChoice = "Paper";
    } else if (answer === "scissors") {
        humanChoice = "Scissors";
    } else {
        console.log("Wrong Input. Try again.");
        return getHumanChoice(); // Retry if the input is wrong
    }
    console.log("Player's choice is: " + humanChoice);
}

function round() {
    getComputerChoice(); // Get new computer choice each round
    getHumanChoice();    // Get new human choice each round
    
    if (choice === humanChoice) {
        console.log("Draw");
    } else if (
        (choice === "Rock" && humanChoice === "Scissors") ||
        (choice === "Paper" && humanChoice === "Rock") ||
        (choice === "Scissors" && humanChoice === "Paper")
    ) {
        computerScore++;
        console.log("Computer Wins this round!");
    } else {
        humanScore++;
        console.log("Human Wins this round!");
    }

    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

function fullGame() {
    while (humanScore < 5 && computerScore < 5) {
        round();
    }
    
    if (humanScore >= 5) {
        console.log("Human wins the game with a score of " + humanScore);
    } else if (computerScore >= 5) {
        console.log("Computer wins the game with a score of " + computerScore);
    }
}

document.getElementById('start-game').addEventListener('click', function() {
    fullGame();
});

// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
// Test what your function returns by using console.log.
// Step 4: Declare the players score variables
// Your game will keep track of the players score. You will write variables to keep track of the players score.

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.
// Step 5: Write the logic to play a single round
// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.
// Example code:a

// function playRound(humanChoice, computerChoice) {
//   // your code here!
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
// Step 6: Write the logic to play the entire game
// Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.
// Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
// Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
// If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson