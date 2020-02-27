const main = require('../src/main');

describe('It tests the switch turn handler', () =>  {

  document.body.innerHTML =
  '<div class="flex-container flex-wrap card" id="board">' +
    '<div class="square"></div>' +
    '<div class="square"></div>' +
    '<div class="square"></div>' +
    '<div class="square chosen"></div>' +
    '<div class="square"></div>' +
    '<div class="square"></div>' +
    '<div class="square"></div>' +
    '<div class="square"></div>' +
    '<div class="square"></div>' +
  '</div>'

  const event = {
    target: document.querySelector(".chosen").target
  }
  const variables = main.variables
  variables.player1 = main.Player('Christian', 'X')
  variables.player2 = main.Player('Gabriela', '0')
  variables.board = [1,'X',2,'0']


})
