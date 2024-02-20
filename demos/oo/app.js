import { PlayingCard } from './PlayingCard.js';
import { Deck }  from  './Deck.js'; 
import { Tafel } from './Tafel.js';

let container = document.querySelector('div.container');


let tafel = new Tafel();
container.appendChild(tafel.element);

// console.log(Deck.all_ranks)

// let card = new PlayingCard('hearts', 10);
// console.log(card);




// let deck = new Deck();
// container.appendChild(deck.element);

//optie 2:
//wel bij de container! Maar.... moet die event hier wel staan?
// deck.element.addEventListener('click', event =>
// {
//     let card = deck.getRandomCard();
//     container.appendChild(card.element);
// });

// let randomCard1 = deck.getRandomCard();
// let randomCard2 = deck.getRandomCard();
// let randomCard3 = deck.getRandomCard();



// container.appendChild(randomCard1.element);
// container.appendChild(randomCard2.element);
// container.appendChild(randomCard3.element);

















