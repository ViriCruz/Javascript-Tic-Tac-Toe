const main = require('../src/main');

describe('It tests the switch turn handler', () => {
  document.body.innerHTML = '<h2></h2>'
  + '<div class="flex-container flex-wrap card" id="board">'
    + '<div class="square"></div>'
    + '<div class="square"></div>'
    + '<div class="square"></div>'
    + '<div class="square chosen"></div>'
    + '<div class="square"></div>'
    + '<div class="square"></div>'
    + '<div class="square"></div>'
    + '<div class="square"></div>'
    + '<div class="square"></div>'
  + '</div>';

  const event = {
    target: document.querySelector('.chosen'),
  };
  const { variables } = main;
  variables.messageTitle = document.querySelector('h2');
  variables.player1 = main.Player('Christian', 'X');
  variables.player2 = main.Player('Gabriela', '0');
  variables.board = [1, 'X', 3, '0', 5, 6, 7, 8, 9];
  variables.cells = Array.from(document.querySelectorAll('.square'));
  it('returns that cell is occupied', () => {
    main.helpers.setTurn();
    main.helpers.handleTurn(event);
    expect(variables.messageTitle.textContent).toEqual('Opss this cell is taken, try again');
  });

  it('returns the next player\'s turn', () => {
    variables.board = [1, 'X', 3, 4, 5, 6, 7, 8, 9];
    main.helpers.setTurn();
    main.helpers.handleTurn(event);
    expect(variables.messageTitle.textContent).toEqual('It\'s Gabriela\'s turn');
  });
});
