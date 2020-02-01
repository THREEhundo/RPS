document.addEventListener('DOMContentLoaded', function(event) {
  /*jshint esversion: 6 */
  let playerScore = 0;
  let compScore = 0;
  const currentPlayerScore = document.querySelector("#p-score");
  const currentCompScore = document.querySelector("#c-score");
  const playByPlay = document.querySelector("#play-by-play");
  const rock = document.querySelector("#r");
  const paper = document.querySelector("#p");
  const scissors = document.querySelector("#s");
  const compRock = document.querySelector("#cr");
  const compPaper = document.querySelector("#cp");
  const compScissors = document.querySelector("#cs");
  const pBpRock = document.querySelector("#rock-text");
  const pBpPaper = document.querySelector("#paper-text");
  const pBpScissors = document.querySelector("#scissors-text");
  const ul = document.querySelector("ul");

  noDisplay(ul);
  loadingScreen();
  addEventListeners();

  function stopAnimation(animation) {
    animation.classList.remove("text-blur-out");
  }

  function startAnimation(animation) {
    animation.classList.add("text-blur-out");
  }

  function hideSpans() {
    compRock.style.visibility = "hidden";
    compPaper.style.visibility = "hidden";
    compScissors.style.visibility = "hidden";
  }

  function visible(el) {
    el.style.visibility = "visible";
  }

  function display(el) {
    el.style.display = "";
  }

  function noDisplay(el) {
    el.style.display = "none";
  }

  function loadingScreen() {
    setTimeout(function() {
      stopAnimation(compRock);
      stopAnimation(pBpRock);
      setTimeout(startAnimation(compRock), 0);
      setTimeout(startAnimation(pBpRock), 0);
    }, 0);
    setTimeout(function() {
      stopAnimation(compPaper);
      stopAnimation(pBpPaper);
      setTimeout(startAnimation(compPaper), 0);
      setTimeout(startAnimation(pBpPaper), 0);
    }, 2500);
    setTimeout(function() {
      stopAnimation(compScissors);
      stopAnimation(pBpScissors);
      setTimeout(startAnimation(compScissors), 0);
      setTimeout(startAnimation(pBpScissors), 0);
    }, 5000);
    setTimeout(hideSpans, 11000);
    setTimeout(display, 11000, ul);
  }

  function clickRock() {
    playRound("r");
  }

  function clickPaper() {
    playRound("p");
  }

  function clickScissors() {
    playRound("s");
  }
  // Allows player selection.
  function addEventListeners() {
    rock.addEventListener("click", clickRock);
    paper.addEventListener("click", clickPaper);
    scissors.addEventListener("click", clickScissors);
  }
  // Prevents players from forcing pick before animation ends.
  function removeEventListeners() {
    rock.removeEventListener("click", clickRock);
    paper.removeEventListener("click", clickPaper);
    scissors.removeEventListener("click", clickScissors);
  }

  function computerShoots() { // randomly chooses a move
    const moves = ["r", "p", "s"];
    return moves[Math.floor(Math.random() * 3)];
  }
  // outcomes
  function win() {
    playerScore++;
    currentPlayerScore.innerHTML = playerScore;
    playByPlay.innerHTML = "You Win";
  }

  function lose() {
    compScore++;
    currentCompScore.innerHTML = compScore;
    playByPlay.innerHTML = "You Lose";
  }

  function tie() {
    playByPlay.innerHTML = "Tie";
  }

  // Promise resolves in 1 second, Animation added for each computer pick.
  function resolveAfterHalfSecond(picked) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(startAnimation(picked));
      }, 500);
    });
  }

  async function showCompMove(pick) {
    if (pick === "r") {
      visible(compRock); // make span visible
      stopAnimation(compRock); // take off animation class
      await resolveAfterHalfSecond(compRock); // add animation class
    } else if (pick === "p") {
      visible(compPaper);
      stopAnimation(compPaper); // take off animation class
      await resolveAfterHalfSecond(compPaper); // add animation class
    } else if (pick === "s") {
      visible(compScissors);
      stopAnimation(compScissors); // take off animation class
      await resolveAfterHalfSecond(compScissors); // add animation class
    }
  }

  function playRound(playerA) {
    // Outcome conditions
    removeEventListeners();
    const compPick = computerShoots();
    switch (playerA + compPick) {
      case "rs":
      case "pr":
      case "sp": {
        console.log(compPick);
        showCompMove(compPick);
        win();
        break;
      }
      case "rp":
      case "ps":
      case "sr": {
        console.log(compPick);
        showCompMove(compPick);
        lose();
        break;
      }
      case "rr":
      case "ss":
      case "pp": {
        console.log(compPick);
        showCompMove(compPick);
        tie();
        break;
      }
    }
    setTimeout(function() {
      addEventListeners();
    }, 3500);
  }
});