const main = require('../src/main');

describe('It tests the starting form handler', () => {
  document.body.innerHTML = '<form class="form card">'
    + '<label for="player1">First player name:</label>'
    + '<input type="text" name="player1" value="Christian">'
    + '<p>First player\'s symbol is X</p>'
    + '<label for="player2">First player name:</label>'
    + '<input type="text" name="player2" value="Gabriela">'
    + '<p>Second player\'s symbol is 0</p>'
    + '<button id="start-game" type="button" name="button">Start Game</button>'
  + '</form>';

  const { variables } = main;

  it('It must retrieve the value from player1\' input field', () => {
    main.helpers.playerNames();
    expect(variables.player1.getName()).toBe('Christian');
  });

  it('It must retrieve the value from player2\' input field', () => {
    main.helpers.playerNames();
    expect(variables.player2.getName()).toBe('Gabriela');
  });
});
