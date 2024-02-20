import { Board } from './board.js';

export class TicTacToe
{
    board;
    players = ['X', 'O'];
    currentPlayer;

    dragElement;

    constructor(parent)
    {
        this.currentPlayer = 0;

        this.dragElementX = document.createElement('div');
        this.dragElementX.className = 'drag-element';
        this.dragElementX.draggable = true;
        this.dragElementX.innerText = 'X'
        this.dragElementX.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text', 'X');
        })
        parent.appendChild(this.dragElementX);

        this.dragElementO = document.createElement('div');
        this.dragElementO.className = 'drag-element';
        this.dragElementO.draggable = true;
        this.dragElementO.innerText = 'O'
        this.dragElementO.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text', 'O');
        })
        parent.appendChild(this.dragElementO);

        this.board = new Board(3, 3, this);
        parent.appendChild(this.board.element);
    }

    playerMark(cell, value)
    {
        console.log('Cell clicked!');

        //als de cell al een value heeft, dan stoppen
        if(cell.value){
            console.log('Cell already marked!');
            return;
        }

        let new_value = this.players[this.currentPlayer];

        if(new_value != value) //Mag dit wel, is deze speler aan de beurt?
        {
            console.log('Not your turn!');
            return;
        }
        
        this.currentPlayer = 1 - this.currentPlayer; //toggle

        //CELL, ZET JE MAAR OP X of 0 neer
        cell.setValue(new_value);

        //Heeft er iemand gewonnen?
        // if(this.checkWinner())
        // {
        //     console.log('Winner!');
        // }
    }

    //checkWinner()
    //tja.... mij niet bellen
    checkWinner()
    {
        //horizontaal
        for(let i = 0; i < width; i++)
        {
            if(this.board.rows[i][0].value && this.board.rows[i][0].value === this.board.rows[i][1].value && this.board.rows[i][0].value === this.board.rows[i][2].value)
            {
                console.log('Winner!');
                return true;
            }
        }

        //verticaal
        for(let i = 0; i < 3; i++)
        {
            if(this.board.rows[0][i].value && this.board.rows[0][i].value === this.board.rows[1][i].value && this.board.rows[0][i].value === this.board.rows[2][i].value)
            {
                console.log('Winner!');
                return true;
            }
        }

        //diagonaal
        if(this.board.rows[0][0].value && this.board.rows[0][0].value === this.board.rows[1][1].value && this.board.rows[0][0].value === this.board.rows[2][2].value)
        {
            console.log('Winner!');
            return true;
        }

        if(this.board.rows[0][2].value && this.board.rows[0][2].value === this.board.rows[1][1].value && this.board.rows[0][2].value === this.board.rows[2][0].value)
        {
            console.log('Winner!');
            return true;
        }

        return false;
    }
}