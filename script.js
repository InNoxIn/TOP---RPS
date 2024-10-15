let humanScore = 0;
let computerScore = 0;
let choice;          // Computer's choice
let humanChoice;     // Human's choice

// Get Computer's choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 5);
    if (computerChoice === 0) {
        choice = "Rock";
    } else if (computerChoice === 1) {
        choice = "Paper";
    } else if (computerChoice === 2) {
        choice = "Scissors";
    } else if (computerChoice === 3) {
        choice = "Spock";
    } else {
        choice = "Lizard";
    }
    console.log("Computer's choice is: " + choice);
}

// Get Human's choice
function getHumanChoice() {
    let buttons = document.querySelectorAll(".btn");

    // Remove previous event listeners to avoid stacking
    buttons.forEach(button => {
        let newButton = button.cloneNode(true);  // Create a clone of the button
        button.parentNode.replaceChild(newButton, button);  // Replace the button to remove old listeners
    });

    // Re-select buttons after cloning to add fresh listeners
    buttons = document.querySelectorAll(".btn");

    // Function to handle button click
    function handleClick(event) {
        let buttonId = this.id;  // Get the id of the clicked button
        
        // Check the button ID and assign the corresponding human choice
        if (buttonId === "rock") {
            humanChoice = "Rock";
        } else if (buttonId === "paper") {
            humanChoice = "Paper";
        } else if (buttonId === "scissors") {
            humanChoice = "Scissors";
        } else if (buttonId === "spock") {
            humanChoice = "Spock";
        } else if (buttonId === "lizard") {
            humanChoice = "Lizard";
        } else {
            console.log("Wrong Input. Try again.");
            return;
        }

        // Output the player's choice and disable further clicks for the round
        console.log("Player's choice is: " + humanChoice);
        disableButtons();

        // Proceed with other game logic here
        playRound();  // Play the round after getting both choices
    }

    // Attach event listeners to all buttons with `once: true`
    buttons.forEach(button => {
        button.addEventListener("click", handleClick, { once: true });
    });

    function disableButtons() {
        buttons.forEach(button => {
            button.disabled = true;  // Disable each button
        });
    }

    function enableButtons() {
        buttons.forEach(button => {
            button.disabled = false;  // Re-enable each button
        });
    }

    enableButtons();  // Enable buttons at the start of a new round
}

// Play one round of the game
function playRound() {
    getComputerChoice();  // Get computer's choice for the round

    // Evaluate the round after both human and computer have made choices
    if (choice === humanChoice) {
        console.log("It's a draw!");
    } else if (
        (choice === "Rock" && (humanChoice === "Scissors" || humanChoice === "Lizard")) ||
        (choice === "Paper" && (humanChoice === "Rock" || humanChoice === "Spock")) ||
        (choice === "Scissors" && (humanChoice === "Paper" || humanChoice === "Lizard")) ||
        (choice === "Lizard" && (humanChoice === "Spock" || humanChoice === "Paper")) ||
        (choice === "Spock" && (humanChoice === "Scissors" || humanChoice === "Rock"))
    ) {
        computerScore++;
        console.log("Computer wins this round!");
    } else {
        humanScore++;
        console.log("Human wins this round!");
    }

    // Update scores in the DOM
    document.getElementById('human-score').innerText = humanScore;
    document.getElementById('computer-score').innerText = computerScore;

    // Output current score
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);

    // Check if either player has reached 5 points
    if (humanScore >= 5) {
        console.log("Human wins the game with a score of " + humanScore);
        endGame("Human");
    } else if (computerScore >= 5) {
        console.log("Computer wins the game with a score of " + computerScore);
        endGame("Computer");
    } else {
        // If no one has won yet, start the next round
        console.log("Next round...");
        getHumanChoice();  // Wait for the human's next input
    }
}

// End the game, disable buttons, and allow reset
function endGame(winner) {
    console.log(winner + " wins the game!");
    document.getElementById('start-game').innerText = "Restart Game";  // Change button text to Restart Game
    disableButtons();  // Disable all buttons
}

// Reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById('human-score').innerText = humanScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('start-game').innerText = "Start Game";  // Reset button text
    console.log("Game has been reset. Starting new game...");
    getHumanChoice();  // Enable buttons and start a new round
}

// Disable all buttons when game ends
function disableButtons() {
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Add event listener for Start/Reset Game button
document.getElementById('start-game').addEventListener('click', function () {
    if (humanScore >= 5 || computerScore >= 5) {
        resetGame();  // Reset the game if it has ended
    } else {
        getHumanChoice();  // Start game if it's the initial start
    }
});

// Start the first round
getHumanChoice();  // Enable buttons and start game
