const main = require('../src/main');

test('Display a Player\'s name and symbol', () => {
  const playerName = "Christian"
  const playerSymbol = "X"
  const player = main.Player(playerName, playerSymbol)
  expect(player.getPlayer()).toEqual({name: playerName, symbol:playerSymbol})
})
