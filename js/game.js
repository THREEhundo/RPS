document.addEventListener('DOMContentLoaded', function (event){
  let playerScore = 0
  let compScore = 0
  const currentPlayerScore =  document.querySelector('#pScore')
  const currentCompScore = document.querySelector('#cScore')
  const playByPlay = document.querySelector('#playByPlay')
  const playerCurrentChoice = document.querySelector('#playerChoice')
  const compCurrentChoice = document.querySelector('#compChoice')
  const rock = document.querySelector('#r')
  const paper = document.querySelector('#p')
  const scissors = document.querySelector('#s')

  function computerShoots() {
    // randomly chooses a move
    let moves = ['r', 'p', 's']
    return moves[Math.floor(Math.random() * 3)]
  }
  // player chooses move
  rock.addEventListener('click', event => playRound('r'))
  paper.addEventListener('click', event => playRound('p'))
  scissors.addEventListener('click', event => playRound('s'))
  // outcomes
  function win() {
    playerScore++
    currentPlayerScore
  }

  function lose() {

  }

  function tie() {

  }

  function playRound(playerA) {
    // Outcome conditions
    const compPick = computerShoots()
    switch (playerA + compPick) {
      case 'rs':
      case 'pr':
      case 'sp':
        win()
        break;
      case 'rp':
      case 'ps':
      case 'sr':
        lose()
        break;
      case 'rr':
      case 'ss':
      case 'pp':
       tie()
       break;
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
