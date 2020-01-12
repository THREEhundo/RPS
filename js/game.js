document.addEventListener('DOMContentLoaded', function (event){
  let playerScore = 0
  let compScore = 0
  let ties = 0
  const currentPlayerScore =  document.querySelector('#p-score')
  const currentCompScore = document.querySelector('#c-score')
  const playByPlay = document.querySelector('#play-by-play')
  const playerCurrentChoice = document.querySelector('#player-choice')
  const compCurrentChoice = document.querySelector('#comp-choice')
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
    playerScore++
    currentPlayerScore.innerHTML = playerScore
    playByPlay.innerHTML = `You Win`
  }

  function lose() {
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
})
