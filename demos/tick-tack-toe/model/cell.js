export class Cell
{
    element;
    value; //x or o

    constructor(tictactoe)
    {
        
        this.element = document.createElement('div');
        this.element.className = 'cell';

        this.element.addEventListener('dragover', (event) => {
            var text = event.dataTransfer.getData("text");
            if(text != 'X' && text != 'O')
                event.preventDefault();
        });

        this.element.addEventListener('drop', (event) => {
            var value = event.dataTransfer.getData("text");
            tictactoe.playerMark(this, value);
        })
    }

    setValue(value){
        this.value = value;
        this.element.innerText = value;
    }
}