import { PlayingCard } from './PlayingCard.js';

//global (voor deze file) variables
const all_suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const all_ranks = [2,3,4,5,6,7,8,9,10, 'b', 'v', 'k', 'a'];


export class Deck
{
    cards = [];

    //dit is mooier he?
    static all_suits = ['♥', '♦', '♠', '♣'];
    static all_ranks = [2,3,4,5,6,7,8,9,10, 'b', 'v', 'k', 'a'];

    element; //dom element
    onCardDrawCallback; //function

    //Je moet de callback niet vergeten!
    constructor()
    {
        this.element = document.createElement('div');
        this.element.className = 'deck';

        for (let suit of Deck.all_suits)
        {
            for (let rank of Deck.all_ranks)
            {
                this.cards.push(new PlayingCard(suit, rank));
            }
        }

        //optie 1.
        this.element.addEventListener('click', event => 
        {
            let card = this.getRandomCard();
            this.onCardDrawCallback(card);
        });
    }

    //callback is dus een functie!
    onCardDraw(callback)
    {
        this.onCardDrawCallback = callback;
    }

    //dIT MOET JE DOEN! SORRY BOB
    getRandomCard()
    {
        let randomIndex = Math.floor(Math.random() * this.cards.length);
        let card = this.cards[randomIndex];
        this.cards.splice(randomIndex, 1);
        return card;
    }

    //vind je dit mooier? pech!
    // getCard = function(){

    // }
}

//dit raad ik af
// export default {
//     all_ranks, all_suits
// }