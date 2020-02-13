// // factory player
const Player = (name, symbol) => {
  const getName = () => name
  const getSymbol = () => symbol
  const getPlayer = () => ({ name, symbol });
  return { getPlayer, getName, getSymbol }
};
// const player1 = Player('Player1', 'x')
// console.log(player1.getPlayer())
// console.log(player1.getSymbol());
// console.log(player1.getName());
// console.log(Player('sad','d'))
// const gameboard = (() => {
//   const get = () => ['','','','','','','','','']
//   const render = () => {
//   }
//   const updateGameboard = () => {
//   }
//   const checkCellAvailable = () => {
//   }
//   const checkWinner = () => {
//   }
//   return {
//     get,
//     render,
//     updateGameboard,
//     checkCellAvailable,
//     checkWinner
//   }
// })();
// const game = (() => {
//   return { start }
// })();
// game.start()

// console.log(cells);

// const start = () => {
//     const winningCombos = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//       ];
//     const board = Array.from(Array(9).keys())
//     const player1 = Player('1', "X")
//     const player2 = Player('2', "0")
// }
const variables = (function() {
    const cells = Array.from(document.querySelectorAll(".square"))
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    const board = Array.from(Array(9).keys())
    const player1 = Player('1', "X")
    const player2 = Player('2', "0")
    const messageTitle = document.querySelector('h2')
    return {
      cells,
      winningCombos,
      board,
      player1,
      player2,
      messageTitle
    };
}());

let turn = variables.player1.getSymbol()


const handleTurn = (event) => {
  let index = variables.cells.findIndex((cell) => cell === event.target)
  variables.board[index] = turn
  event.target.textContent = turn
  turn = turn === 'X' ? variables.player2.getSymbol() : variables.player1.getSymbol()
  variables.messageTitle.textContent = `It's ${turn}'s turn`
  checkWinner()
}

const checkWinner = () => {
  let winner = ''
  variables.winningCombos.forEach((item, i) => {
    if(variables.board[item[0]] === variables.board[item[1]] && variables.board[item[1]] === variables.board[item[2]]) {
      document.getElementById('board').removeEventListener('click', handleTurn)
      winner = variables.board[item[0]]
      variables.messageTitle.textContent = `Player ${winner} won!`
      return
    } else if(variables.board.every(function(element) { return typeof element === 'string'; })) {
      variables.messageTitle.textContent = `It's a ${winner}`
      winner = 'Tie!'
    }
  });
  console.log(winner)
  return winner
}

document.getElementById('board').addEventListener('click', handleTurn)
document.getElementById('reset-button').addEventListener('click', () => {
  location.reload()
})