console.log(`hi`);
function computerPlay() {
  // randomly return rock, paper, scissors
  let moves = ['🗿', '🧻', '✂️']
  return moves[Math.floor(Math.random() * moves.length)]
}
computerPlay()
