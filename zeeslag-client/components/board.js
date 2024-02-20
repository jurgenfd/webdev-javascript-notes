export class BoardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.width = 10;
        this.height = 10;
    }

    static get observedAttributes() {
        return ['width', 'height'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
            this.render();
        }
    }

    render() {
        const board = document.createElement('div');
        board.style.display = 'grid';
        board.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${this.height}, 1fr)`;

        //calculate real width of this container
        const realWidth = this.getBoundingClientRect().width;
        debugger;
        const realHeight = realWidth / this.width * this.height;
        this.style.height = `${realHeight}px`;

        for (let i = 0; i < this.width * this.height; i++) {
            const cell = document.createElement('div');
            cell.style.border = '1px solid black';
            cell.style.cursor = 'pointer';
            cell.addEventListener('click', this.handleCellClick);
            cell.addEventListener('dragover', this.handleCellDragOver);
            cell.addEventListener('drop', this.handleCellDrop);
            board.appendChild(cell);
        }

        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(board);
    }

    handleCellClick(event) {
        // Handle cell click event here
    }

    handleCellDragOver(event) {
        event.preventDefault();
    }

    handleCellDrop(event) {
        event.preventDefault();
        // Handle cell drop event here
    }
}

customElements.define('board-component', BoardComponent);