//Dit is het startpunt dus bijv code zoals.
// import {Cell} from './model/cell.js';
// import { Board } from './model/board.js';
import { TicTacToe } from './model/tictactoe.js';
//alternatieven
// let container = document.querySelector('div.tic-tac-toe');
// // let container = document.querySelector('#tictactoe');
let container = document.getElementById('tictactoe');

// let cell_example = new Cell();
// container.appendChild(cell_example.element);
// let board = new Board(3, 3);
// container.appendChild(board.element);

let tictactoe = new TicTacToe(container);

