document.addEventListener('DOMContentLoaded', function (event){
  function computerPlay() {
    // randomly chooses a move
    let moves = ['rock', 'paper', 'scissors']
    return moves[Math.floor(Math.random() * moves.length)]
  }

  function playRound(playerA, playerB) {
    // Outcome conditions
    if (playerA == 'rock' && playerB == 'paper') {
      return `You lose.`
    } else if (playerA == 'rock' && playerB == 'rock') {
      return `Draw.`
    } else if (playerA == 'rock' && playerB == 'scissors') {
      return `You win.`
    } else if (playerA == 'paper' && playerB == 'scissors') {
      return `You lose.`
    } else if (playerA == 'paper' && playerB == 'paper') {
      return `Draw.`
    } else if (playerA == 'paper' && playerB == 'rock') {
      return `You win.`
    } else if (playerA == 'scissors' && playerB == 'rock') {
      return `You lose.`
    } else if (playerA == 'scissors' && playerB == 'scissors') {
      return `Draw.`
    } else if (playerA == 'scissors' && playerB == 'paper') {
      return `You win.`
    }
  }

  function game() {
    // 5 rounds
    let playerTally = 0
    let computerTally = 0
    let tied = 0
    for (var i = 0; i < 5; i++) {
      let round = playRound(playerSelection, computerPlay())
      console.log(round)
      if (round == `You win.`) {
        playerTally++
        console.log(playerTally)
      } else if (round == `You lose.`) {
        computerTally++
        console.log(computerTally)
      } else if (round == `Draw.`) {
        tied++
        console.log(tied)
      }
    }
    // compute totals and announce winner
    if (playerTally > computerTally && playerTally > tied) {
      console.log(`You Win`)
    } else if (computerTally > playerTally && computerTally > tied) {
      console.log(`Computer Wins`)
    } else if (tied > computerTally && tied > playerTally) {
      console.log(`Tie`)
    }

  }

  const playerSelection = 'paper'


  computerPlay()
  game()
})
