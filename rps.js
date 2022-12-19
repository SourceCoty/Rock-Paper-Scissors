let computerSelection = '';
let playerSelection = '';
let playerWins = 0;
let computerWins = 0;

function getComputerSelection() {
    const myArray = ["rock" ,"paper", "scissors"]
    computerSelection = myArray[Math.floor(Math.random() * myArray.length)];
}

function getPlayerSelection() {
     playerSelection = prompt("Please enter Rock, Paper, or Scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
    console.log("It's a tie! Rock is equal to Rock");
    } 
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats Scissors");
        playerWins++;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats Rock");
        computerWins++;
    } 
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats Rock");
        playerWins++;
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("It's a tie! Paper is equal to Paper");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerWins++
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beast Scissors");
        computerWins++;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats Paper");
        playerWins++;
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("It's a tie! Scissors is equal to Scissors");
    } else {
        if (playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors") {
            console.log("Player selection is invalid. By default, the round goes to the computer.")
            computerWins++;
        }
    }
}

function declareWinner() {
    if (playerWins > computerWins) {    
    return "Great job! You won this series!";
    } else if (playerWins < computerWins) {
    return "Better luck next time! You lost this series.";
    }
    else { 
        return "Everyone's a winner! ...but also a loser. This series was a tie.";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        getPlayerSelection();
        getComputerSelection();
        playRound(playerSelection, computerSelection);
        console.log("Player Wins: " + playerWins + " Computer Wins: " + computerWins);
    }
    console.log(declareWinner());
} 



game()
