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
    const cells = document.querySelectorAll(".square")
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
    return {
      cells,
      winningCombos,
      board,
      player1,
      player2
    };
}());

let turn = variables.player1.getSymbol()

const handleTurn = (event) => {
  event.target.textContent = turn
  turn = turn === 'X' ? variables.player2.getSymbol() : variables.player1.getSymbol()
}

document.getElementById('board').addEventListener('click', handleTurn)
