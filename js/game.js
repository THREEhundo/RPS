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
  const header = document.querySelector('#comp-header')

  noDisplay(ul)

  function stopAnimation(animation) {
    animation.classList.remove('text-blur-out')
  }
  function startAnimation(animation) {
    animation.classList.add('text-blur-out')
  }
  function hideSpans() {
    compRock.style.visibility = 'hidden'
    compPaper.style.visibility = 'hidden'
    compScissors.style.visibility = 'hidden'
  }
  function visible(el) {
    el.style.visibility = 'visible'
  }
  function display(el) {
    el.style.display = ''
  }
  function noDisplay(el) {
    el.style.display = 'none'
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
      // header vis hidden
    }, 5000)
  setTimeout(hideSpans, 11000)
  setTimeout(() => display(ul), 11000)
  }
  loadingScreen()

  // put eventlisteners in variables
  // create removeEventListener()
  // remove eventlisteners off while comp move is shown
  // add eventlisteners when comp move finishes.

  // change addEventListener anonymous to variable
  function clickRock() {
    playRound('r')
  }
  function clickPaper() {
    playRound('p')
  }
  function clickScissors() {
    playRound('s')
  }
  // player chooses move
  addEventListeners()
  function addEventListeners() {
    rock.addEventListener('click', clickRock)
    paper.addEventListener('click', clickPaper)
    scissors.addEventListener('click', clickScissors)
  }
  function removeEventListeners() {
    rock.removeEventListener('click', clickRock)
    paper.removeEventListener('click', clickPaper)
    scissors.removeEventListener('click', clickScissors)
  }

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
      stopAnimation(compRock)
      visible(compRock)
      noDisplay(compPaper)
      noDisplay(compScissors)

      window.setTimeout(function() {
        noDisplay(compRock)
      }, 3500)
    } if (pick === 'p') {
      stopAnimation(compPaper)
      visible(compPaper)
      noDisplay(compRock)
      noDisplay(compScissors)

      window.setTimeout(function() {
        noDisplay(compPaper)
      }, 3500)
    } if (pick === 's') {
      stopAnimation(compScissors)
      visible(compScissors)
      noDisplay(compRock)
      noDisplay(compPaper)

      window.setTimeout(function() {
        noDisplay(compScissors)
      }, 3500)
    }
  }

  function playRound(playerA) {
    // Outcome conditions
    removeEventListeners()
    const compPick = computerShoots()
    switch (playerA + compPick) {
      case 'rs':
      case 'pr':
      case 'sp':
        showCompMove(compPick) //click disabled
        win()
        break;
      case 'rp':
      case 'ps':
      case 'sr':
        showCompMove(compPick)
        lose()
        break;
      case 'rr':
      case 'ss':
      case 'pp':
       showCompMove(compPick)
       tie()
       break;
    }
  }
// })
