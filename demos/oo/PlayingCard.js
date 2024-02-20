//Dit is de manier om het te doen!
export class PlayingCard 
{
    suit;
    rank; 

    element;

    constructor(suit, rank)
    {
        this.suit = suit;
        this.rank = rank;

        this.element = document.createElement('div');
        this.element.className = 'card';
        this.element.innerText = `${rank} of ${suit}`;
    }
}

//Vroeger was alles beter.... ownee
// function PlayingCard(suit, rank)
// {
//     this.suit = suit;
//     this.rank = rank;
// }