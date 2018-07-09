'use strict'
const store = require ('../store.js')

const onCreateSuccess = function (data) {
  $('#message').text('Game successfully created')
  $('#message').css('background-color', '#f7bd2f')
  store.game = data.game
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
  $('#message').text('Error on creating Game')
  $('#message').css('background-color', 'red')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (data) {
  $('#message').text('All Games successfully received')
  $('#message').css('background-color', '#f7bd2fn')
  console.log('onIndexSuccess ran. Data is :', data.examples)
}

const onIndexFailure = function (error) {
  $('#message').text('Error on getting Games')
  $('#message').css('background-color', 'red')
  console.error('onIndexFailure ran. Error is :', error)
}

const showGamesSucess = function (data) {
  for (let i = 0; i < data.games.length; i++) {
    $('#view-games').append('<p><b>ID:</b>' + data.games[i].id + '    <b>Game Squares</b>' + data.games[i].cells + '</p>')
    $('#view-games').css('color', '#f6ff18') 
    $('#view-games').removeClass('hidden')
    console.log(data.games[i])
  }
  // $('#view-games').text('${data.games} games have been completed!')
  // console.log(data.games)
}

const showGamesFailure = function (error) {
  $('#message').text('Error on getting games')
  $('#message').css('background-color', 'red')
  console.error('onShowFailure ran. Error is :', error)
}

const userMovesSucess = function (data) {

}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating Game')
  $('#message').css('background-color', 'red')
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  showGamesSucess,
  showGamesFailure,
  onUpdateFailure,
  userMovesSucess
}
