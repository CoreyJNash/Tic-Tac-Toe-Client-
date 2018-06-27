'use strict'
const startGame = require(`../game.js`)

const api = require('./api')
const ui = require('./ui')

const onCreateGames = function (event) {
  event.preventDefault()
  console.log('onCreateGames ran!')
  startGame.startGame()

  api.create()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
  // console.log(data)
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

const onDeleteGames = function (event) {
  event.preventDefault()
  console.log('onDeleteGame ran!')

  const data = getFormFields(event.target)
  const games = data.games

  if (games.id.length !== 0) {
    api.destroy(games.id)
      .then(ui.onDeleteSuccess)
      .catch(ui.onDeleteFailure)
  } else {
    $('#message').html('<p>Please provide an Game id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide an Game id!')
  }
}

const onUpdateGames = function (event) {
  event.preventDefault()
  console.log('onUpdateGame ran!')

  const data = getFormFields(event.target)
  const games = data.games

  if (games.text === '') {
    $('#message').html('<p>Text is required</p>')
    $('#message').css('background-color', 'red')
    console.log('Text is required!')
    return false
  }
  if (games.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  } else {
    $('#message').html('<p>Please provide an example id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide an example id!')
  }
}

const addHandlers = () => {
  $('#games-create').on('submit', onCreateGames)
  $('#games-index').on('submit', onIndexGames)
  $('#games-show').on('submit', onShowGames)
  $('#games-delete').on('submit', onDeleteGames)
  $('#games-update').on('submit', onUpdateGames)
}

module.exports = {
  addHandlers
}
