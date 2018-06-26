// When the page loads the game funtions will run
$(document).ready(function () {
// let the logic know that player 1 is X and player 2 is O
  const player1 = 'X'
  const player2 = 'O'

// Start the game off whith knowing that its turn 1 and no moves have been made yet
  let currentTurn = 1
  let movesMade = 0

  // declare out variables that will be used throughout the program
  // sqr is the swuare divs
  // winner container is the display that shows who has won the game
  // reset is the reset button to reset the board
  const sqr = $('.square')
  const winnerContainer = $('.winner')
  const reset = $('.reset')

  // let the system know when a user clicks on a specific square and move ahead a turn
  sqr.on('click', function (e) {
    movesMade += 1

    // If its turn one than when a player clicks on a square put a green x on the screen
    //  if not its turn 2 ect. and put a yellow O on the screen and cycle back to player 1
    if (currentTurn === 1) {
      event.target.innerHTML = player1
      event.target.style.color = '#52ff00'
      currentTurn += 1
    } else {
      event.target.innerHTML = player2
      event.target.style.color = '#2fd7f7'
      currentTurn -= 1
    }
    // check to see who won.  If the current player is 1 and it's not player 2 than
    // player 1 wins.
    if (checkForWinner()) {
      const theWinner = currentTurn === 1 ? player2 : player1
      declareWinner(theWinner)
    }
  })

  // Funtion to make resetting the board run when the reset button is clicked
  reset.on('click', function (e) {
    const moves = Array.prototype.slice.call($('.square'))
    moves.map((m) => {
      m.innerHTML = ''
    })
    winnerContainer.hmtl = ''
    winnerContainer.css('display', 'none')
    currentTurn = 1
    movesMade = 0
  })
  // check for a winner if the moves made is greater than 4
  // need to check for tie
  function checkForWinner () {
    if (movesMade > 4) {
      const moves = Array.prototype.slice.call($('.square'))
      const results = moves.map(function (square) {
        return square.innerHTML
      })
      // These are the winning combos that can be made by both players
      //  this has horizontal, vertical and diagnal conditions
      const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]

      return winningCombos.find(function (combo) {
        if (results[combo[0]] !== '' && results[combo[1]] !== '' && results[combo[2]] !== '' && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
          return true
        } else {
          return false
        }
      })
    }
  }
  function declareWinner (winner) {
    winnerContainer.css('display', 'block')
    reset.css('display', 'block')
    winner = winner === player1 ? 'Player X' : 'Player O'
    winnerContainer.html(winner + ' ' + 'Wins!')
  }
})
