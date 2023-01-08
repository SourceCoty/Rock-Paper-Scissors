let playerWins = 0
let computerWins = 0
let computerSelection = getComputerSelection()
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
    playerWins++
    computerWins++
    } 
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        round = "You win! Rock beats Scissors"
        playerWins++
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        round = "You lose! Paper beats Rock"
        computerWins++
    } 
    else if (playerSelection == "paper" && computerSelection == "rock") {
        round = "You win! Paper beats Rock"
        playerWins++
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        round = "It's a tie! Paper is equal to Paper"
        playerWins++
        computerWins++
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        round = "You lose! Scissors beats Paper"
        computerWins++
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        round = "You lose! Rock beast Scissors"
        computerWins++
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        round = "You win! Scissors beats Paper"
        playerWins++
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        round = "It's a tie! Scissors is equal to Scissors"
        playerWins++
        computerWins++
    }
    document.getElementById('round').innerHTML = round

}

function countTally() {
    let tally = "Player score: " + playerWins + " |" + " Computer score: " + computerWins
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
    playRound(button.id, computerSelection)
    })
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {    
    countTally(button.id, computerSelection)
    })
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {    
    totalScore()
    })
})
