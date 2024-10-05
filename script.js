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

