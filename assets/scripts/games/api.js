'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function (data) {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = function (games) {
  return $.ajax({
    url: config.apiUrl + '/games/' + games.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMoves = function (index, value, over) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.games.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

module.exports = {
  createGame,
  index,
  show,
  destroy,
  updateMoves
}
