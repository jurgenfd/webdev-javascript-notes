import {Deck} from './Deck.js';

export class Tafel 
{
    element;
    deck;

    constructor()
    {
        this.element = document.createElement('div');
        this.element.className = 'tafel';

        this.deck = new Deck();

        //DIT IS HET TRUCJTE VAN DE EEUW
        // this.deck.onCardDraw(function(card){ //DIT WERKT NIET, FUNCTIE VERANDERT VAN SCOPE
        this.deck.onCardDraw((card) => { //DIT WERKT WEL, FUNCTIE HOUD SCOPE VAST!
            console.log(this);
            this.plaatsKaart(card);
        })

        this.element.appendChild(this.deck.element);
    }

    plaatsKaart(playingCard)
    {
        this.element.appendChild(playingCard.element);
    }
}