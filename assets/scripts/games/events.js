'use strict'
const game = require(`../game.js`)

const api = require('./api')
const ui = require('./ui')

const onCreateGames = function (event) {
  event.preventDefault()
  console.log('onCreateGames ran!')
 // game.startGame()

  api.createGame()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
  console.log('Game started')
}

const onIndexGames = function (event) {
  event.preventDefault()
  console.log('onIndexGames ran!')

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onGetGames = function (event) {
  event.preventDefault()
  console.log('onShowGames ran!')
  api.getGames()
    .then(ui.getGamesSucess)
    .catch(ui.getGamesFailure)
  }

const onUpdateMoves = function (event) {
  event.preventDefault()
  console.log('onUpdateMoves ran!')

  const data = game.gameValues
  api.updateMoves(data)
    .then(ui.userMovesSucess)
    .catch(ui.userMovesSucess)
}

const addHandlers = () => {
  $('#games-create').on('click', onCreateGames)
  $('#games-index').on('submit', onIndexGames)
  $('#games-show').on('click', onGetGames)
  $('.square').on('click', onUpdateMoves)
  
}

module.exports = {
  addHandlers
}
