let playerWins = 0
let computerWins = 0
const buttons = document.querySelectorAll('button')


function getComputerSelection() {
    const choices = ["rock" ,"paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection) {
    let round = ''
    let computerSelection = getComputerSelection()

    if (playerSelection == "rock" && computerSelection == "rock") {
    round = "It's a tie! Rock is equal to Rock"
    } 
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        round = "You win! Rock beats Scissors"
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        round = "You lose! Paper beats Rock"
    } 
    else if (playerSelection == "paper" && computerSelection == "rock") {
        round = "You win! Paper beats Rock"
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        round = "It's a tie! Paper is equal to Paper"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        round = "You lose! Scissors beats Paper"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        round = "You lose! Rock beast Scissors"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        round = "You win! Scissors beats Paper"
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        round = "It's a tie! Scissors is equal to Scissors"
    }
    document.getElementById('round').innerHTML = round

}

function countTally(playerSelection) {
    let tally = ''
    let computerSelection = getComputerSelection();

    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
            playerWins++
            tally = "Player score: " + playerWins + " Computer score: " + computerWins
    } else if (playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock") {
            computerWins++   
            tally = "Player score: " + playerWins + " Computer score: " + computerWins
    } else {
        playerWins++
        computerWins++
        tally = "Player score: " + playerWins + " Computer score: " + computerWins
    }
    document.getElementById('tally').innerHTML = tally
}

function totalScore() {
    let result = ''

    if (playerWins === 5 && computerWins ===5) {
        playerWins = 0
        computerWins = 0
       result = "The series is a tie. Everyone's a winner! And also a loser... Click any button to play again!"
    } else if (playerWins === 5) { 
        playerWins = 0
        computerWins = 0
        result = "You win this series! Click any button to play again."
    } else if (computerWins ===5) {
        playerWins = 0
        computerWins = 0
        result = "You lose this series. Click any button to play again"
    }
    document.getElementById('results').innerHTML = result
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {    
    playRound(button.id)
    })
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {    
    countTally(button.id)
    })
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {    
    totalScore()
    })
})
