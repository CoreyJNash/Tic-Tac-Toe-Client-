'use strict'

const onCreateSuccess = function (data) {
  $('#message').text('Game successfully created')
  $('#message').css('background-color', 'green')
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
  $('#message').css('background-color', 'green')
  console.log('onIndexSuccess ran. Data is :', data.examples)
}

const onIndexFailure = function (error) {
  $('#message').text('Error on getting Games')
  $('#message').css('background-color', 'red')
  console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (data) {
  $('#message').text('One game successfully received')
  $('#message').css('background-color', 'green')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onShowFailure = function (error) {
  $('#message').text('Error on getting game')
  $('#message').css('background-color', 'red')
  console.error('onShowFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
  $('#message').text('Game successfully deleted')
  $('#message').css('background-color', 'green')
  console.log('Game successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error on deleting game')
  $('#message').css('background-color', 'red')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#message').text('Game successfully updated')
  $('#message').css('background-color', 'green')
  console.log('Game successfully updated')
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
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}
