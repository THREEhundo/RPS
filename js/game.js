function computerPlay() {
  // randomly return rock, paper, scissors
  let moves = ['rock', 'paper', 'scissors']
  return moves[Math.floor(Math.random() * moves.length)]
}

function playRound(playerA, playerB) {
  if (playerA == 'rock' && playerB == 'paper') {
    return `You lose.
    ${playerB} beats ${playerA}`
  } else if (playerA == 'rock' && playerB == 'rock') {
    return `Draw.
    ${playerB} cancels out ${playerA}`
  } else if (playerA == 'rock' && playerB == 'scissors') {
    return `You win.
    ${playerB} beats ${playerA}`
  } else if (playerA == 'paper' && playerB == 'scissors') {
    return `You lose.
    ${playerB} beats ${playerA}`
  } else if (playerA == 'paper' && playerB == 'paper') {
    return `Draw.
    ${playerB} cancels out ${playerA}`
  } else if (playerA == 'paper' && playerB == 'rock') {
    return `You win.
    ${playerB} beats ${playerA}`
  } else if (playerA == 'scissors' && playerB == 'rock') {
    return `You lose.
    ${playerB} beats ${playerA}`
  } else if (playerA == 'scissors' && playerB == 'scissors') {
    return `Draw.
    ${playerB} cancels out ${playerA}`
  } else if (playerA == 'scissors' && playerB == 'paper') {
    return `You win.
    ${playerB} beats ${playerA}`
  }
}

function game() {

}

computerPlay()

const playerSelection = 'paper'
const computerSelection = computerPlay()
