document.addEventListener('DOMContentLoaded', function (event){
  function computerPlay() {
    // randomly return rock, paper, scissors
    let moves = ['rock', 'paper', 'scissors']
    return moves[Math.floor(Math.random() * moves.length)]
  }

  function playRound(playerA, playerB) {
    // added var to keep count of rounds played
    if (playerA == 'rock' && playerB == 'paper') {
      console.log(`playerA: ${playerA}, playerB: ${playerB}`);
      return `You lose.`
    } else if (playerA == 'rock' && playerB == 'rock') {
      console.log(`playerA: ${playerA}, playerB: ${playerB}`);
      return `Draw.`
    } else if (playerA == 'rock' && playerB == 'scissors') {
      console.log(`playerA: ${playerA}, playerB: ${playerB}`);
      return `You win.`
    } else if (playerA == 'paper' && playerB == 'scissors') {
      console.log(`playerA: ${playerA}, playerB: ${playerB}`);
      return `You lose.`
    } else if (playerA == 'paper' && playerB == 'paper') {
      console.log(`playerA: ${playerA}, playerB: ${playerB}`);
      return `Draw.`
    } else if (playerA == 'paper' && playerB == 'rock') {
      console.log(`playerA: ${playerA}, playerB: ${playerB}`);
      return `You win.`
    } else if (playerA == 'scissors' && playerB == 'rock') {
      console.log(`playerA: ${playerA}, playerB: ${playerB}`);
      return `You lose.`
    } else if (playerA == 'scissors' && playerB == 'scissors') {
      console.log(`playerA: ${playerA}, playerB: ${playerB}`);
      return `Draw.`
    } else if (playerA == 'scissors' && playerB == 'paper') {
      // tabulate record
      console.log(`playerA: ${playerA}, playerB: ${playerB}`);
      return `You win.`
    }
  }

  function game() {
    let playerTally = 0
    let computerTally = 0
    let tied = 0
    for (var i = 0; i < 6; i++) {
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
