// document.addEventListener('DOMContentLoaded', function (event){
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
  const compRock = document.querySelector('#cr')
  const compPaper = document.querySelector('#cp')
  const compScissors = document.querySelector('#cs')
  const shoot = document.querySelector('#shoot')
  const pBpRock = document.querySelector('#rock-text')
  const pBpPaper = document.querySelector('#paper-text')
  const pBpScissors = document.querySelector('#scissors-text')
  const pBpShoot = document.querySelector('#shoot-text')
  const ul = document.querySelector('ul')
  // actions to take
  // rock fade in
  // paper fade in
  // scissors fade in
  // shoot fade in
  // rock paper scissors fade out
  // at end of round show comp pick
  ul.style.display = 'none'

  function stopAnimation(animation) {
    animation.classList.remove('text-blur-out')
  }
  function startAnimation(animation) {
    animation.classList.add('text-blur-out')
  }
  function noDisplay() {
    compRock.style.visibility = 'hidden'
    compPaper.style.visibility = 'hidden'
    compScissors.style.visibility = 'hidden'
  }
  function loadingScreen() {
    setTimeout(function() {
      stopAnimation(compRock)
      stopAnimation(pBpRock)
      setTimeout(startAnimation(compRock), 0)
      setTimeout(startAnimation(pBpRock), 0)
    }, 0)
    setTimeout(function() {
      stopAnimation(compPaper)
      stopAnimation(pBpPaper)
      setTimeout(startAnimation(compPaper), 0)
      setTimeout(startAnimation(pBpPaper), 0)
    }, 2500)
    setTimeout(function() {
      stopAnimation(compScissors)
      stopAnimation(pBpScissors)
      setTimeout(startAnimation(compScissors), 0)
      setTimeout(startAnimation(pBpScissors), 0)
    }, 5000)
  setTimeout(noDisplay, 11000)
  setTimeout(() => ul.style.display = '', 11000)
  }
  loadingScreen()
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

  function showCompMove(pick) {
    if (pick === 'r') {
      compRock.style.display = 'block'
      window.setTimeout(function() {
        compRock.style.display = 'none'
      }, 3500)
    } if (pick === 'p') {
      compPaper.style.display = 'block'
      window.setTimeout(function() {
        compPaper.style.display = 'none'
      }, 3500)
    } if (pick === 's') {
      compScissors.style.display = 'block'
      window.setTimeout(function() {
        compScissors.style.display = 'none'
      }, 3500)
    }
  }

  function playRound(playerA) {
    // Outcome conditions
    const compPick = computerShoots()
    switch (playerA + compPick) {
      case 'rs':
      case 'pr':
      case 'sp':
        console.log(compPick);
        showCompMove(compPick)
        win()
        break;
      case 'rp':
      case 'ps':
      case 'sr':
        console.log(compPick);
        showCompMove(compPick)
        lose()
        break;
      case 'rr':
      case 'ss':
      case 'pp':
        console.log(compPick);
        showCompMove(compPick)
       tie()
       break;
    }
  }
// })
