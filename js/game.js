// document.addEventListener('DOMContentLoaded', function (event){
  let playerScore = 0
  let compScore = 0
  let ties = 0
  const currentPlayerScore =  document.querySelector('#pScore')
  const currentCompScore = document.querySelector('#cScore')
  const playByPlay = document.querySelector('#playByPlay')
  const playerCurrentChoice = document.querySelector('#playerChoice')
  const compCurrentChoice = document.querySelector('#compChoice')
  const rock = document.querySelector('#r')
  const paper = document.querySelector('#p')
  const scissors = document.querySelector('#s')

  // player chooses move
  rock.addEventListener('click', event => playRound('r'))
  paper.addEventListener('click', event => playRound('p'))
  scissors.addEventListener('click', event => playRound('s'))

  function computerShoots() {
    // randomly chooses a move
    let moves = ['r', 'p', 's']
    return moves[Math.floor(Math.random() * 3)]
  }
  // outcomes
  function win() {
    if (playerScore >= 4) {
      currentPlayerScore.innerHTML = playerScore
      return reset()
    }
    playerScore++
    currentPlayerScore.innerHTML = playerScore
    playByPlay.innerHTML = `You Win`
  }

  function lose() {
    if (compScore >= 4) {
      playByPlay.innerHTML = `You Lose`
      return reset()
    }
    compScore++
    currentCompScore.innerHTML = compScore
    playByPlay.innerHTML = `You Lose`
  }

  function tie() {
    ties++
    playByPlay.innerHTML = `Tie`
  }

  function reset() {
    playerScore = 0
    compScore = 0
    ties = 0
    currentPlayerScore.innerHTML = playerScore
    currentCompScore.innerHTML = compScore
  }

  function playRound(playerA) {
    // Outcome conditions
    const compPick = computerShoots()
    switch (playerA + compPick) {
      case 'rs':
      case 'pr':
      case 'sp':
        console.log(compPick);
        win()
        break;
      case 'rp':
      case 'ps':
      case 'sr':
        console.log(compPick);
        lose()
        break;
      case 'rr':
      case 'ss':
      case 'pp':
        console.log(compPick);
       tie()
       break;
    }
  }

  function fiveRounds(playerA) {
    for (var i = 0; i < 5; i++) {
      return playRound(playerA)
     }
  }
// five rounds go automatically
// need to wait each loop

// })
