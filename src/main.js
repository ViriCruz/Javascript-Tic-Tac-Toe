// // factory player
const Player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  const getPlayer = () => ({ name, symbol });
  return { getPlayer, getName, getSymbol };
};

const variables = (() => {
  const cells = Array.from(document.querySelectorAll('.square'));
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const board = Array.from(Array(9).keys());
  let player1;
  let player2;
  const messageTitle = document.querySelector('h2');
  return {
    cells,
    winningCombos,
    board,
    player1,
    player2,
    messageTitle,
  };
})();

const helpers = (() => {
  let turn;

  const checkWinner = () => {
    let winner = '';
    let flag = false;
    let finish = false;
    variables.winningCombos.forEach((item) => {
      if (variables.board[item[0]] === variables.board[item[1]]
          && variables.board[item[1]] === variables.board[item[2]]) {
        winner = variables.board[item[0]] === 'X' ? variables.player1.getName() : variables.player2.getName();
        variables.messageTitle.textContent = `Player ${winner} won!`;
        flag = true;
        finish = true;
      } else if (variables.board.every((element) => typeof element === 'string') && !flag) {
        winner = 'Tie!';
        finish = true;
        variables.messageTitle.textContent = `It's a ${winner}`;
      }
    });
    return finish;
  };

  const handleTurn = (event) => {
    const index = variables.cells.findIndex((cell) => cell === event.target);
    if (typeof variables.board[index] === 'string') {
      variables.messageTitle.textContent = 'Opss this cell is taken, try again';
      return;
    }
    variables.board[index] = turn;
    event.target.textContent = turn;
    turn = turn === 'X' ? variables.player2.getSymbol() : variables.player1.getSymbol();
    variables.messageTitle.textContent = `It's ${turn === 'X' ? variables.player1.getName() : variables.player2.getName()}'s turn`;
    if (checkWinner()) document.getElementById('board').removeEventListener('click', handleTurn);
  };

  const playerNames = () => {
    const player1Name = document.querySelector('input[name="player1"]').value;
    const player2Name = document.querySelector('input[name="player2"]').value;
    variables.player1 = Player(player1Name, 'X');
    variables.player2 = Player(player2Name, '0');
  };

  const setTurn = () => {
    turn = variables.player1.getSymbol();
  };

  const startGame = () => {
    playerNames();
    setTurn();
    document.querySelector('.form-container').style.display = 'none';
    document.querySelector('.board-container').style.display = 'block';
  };

  return {
    handleTurn,
    checkWinner,
    startGame,
    playerNames,
    setTurn,
  };
})();


window.addEventListener('load', () => {
  function init() {
    document.getElementById('start-game').addEventListener('click', () => {
      helpers.startGame();
    });
    document.getElementById('board').addEventListener('click', helpers.handleTurn);
    document.getElementById('reset-button').addEventListener('click', () => {
      variables.cells.forEach((item) => {
        item.textContent = '';
      });
      helpers.setTurn();
      variables.board = Array.from(Array(9).keys());
      init();
    });
  }
  init();
});

module.exports = {
  helpers,
  Player,
  variables,
};
