import { Cell } from './cell.js';

export class Board {
    
    
    element; 
    rows = []; //2d array

    constructor(width, height, tictactoe) {
        
        this.element = document.createElement('div');
        this.element.className = 'board';

        let style_grid_width = `repeat(${width}, 1fr)`;
        let style_grid_height = `repeat(${height}, 1fr)`;

        this.element.style.gridTemplateColumns = style_grid_width;
        this.element.style.gridTemplateRows = style_grid_height;

        for (let x = 0; x < width; x++) {
            let row = []
            for (let y = 0; y < height; y++) {
                let cell = new Cell(tictactoe);
                row.push(cell);
            }
            this.rows.push(row);
        }

        this.drawBoard(this.rows);
    }

    //With flexbox 
    // drawBoard(rows){
    //     for (let row of rows) {
    //         let rowEl = document.createElement('div');
    //         rowEl.className = 'row';
    //         for(let cell of row){
    //             rowEl.appendChild(cell.element);
    //         }
    //         this.element.appendChild(rowEl);
    //     }
    // }

    drawBoard(rows){
        for(let i = 0; i < rows.length; i++){
            for(let j = 0; j < rows[i].length; j++){
                this.element.appendChild(rows[i][j].element);
            }
        }
    }
}