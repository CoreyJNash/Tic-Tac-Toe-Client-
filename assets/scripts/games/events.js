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

const onShowGames = function (event) {
  event.preventDefault()
  console.log('onShowGames ran!')

  const data = getFormFields(event.target)
  const games = data.games

  if (games.id.length !== 0) {
    api.show(games)
      .then(ui.onShowSuccess)
      .catch(ui.onShowFailure)
  } else {
    $('#message').html('<p>Please provide an example id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please enter an example id!')
  }
}

const onUpdateMoves = function (event) {
  event.preventDefault()
  console.log('onUpdateMoves ran!')

  const data = game.gameValues
  aip.userMoves(data.i, data.v, data.isOver)
    .then(ui.userMovesSucess)
    .catch(ui.userMovesSucess)
}

const addHandlers = () => {
  $('#games-create').on('click', onCreateGames)
  $('#games-index').on('submit', onIndexGames)
  $('#games-show').on('submit', onShowGames)
}

module.exports = {
  addHandlers
}
