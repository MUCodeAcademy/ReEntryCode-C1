import { useState, useEffect} from 'react';

const initialCards = [
    { name: '/cards/2_of_clubs.png', flipped: false},
    { name: '/cards/4_of_spades.png', flipped: false},
    { name: '/cards/5_of_diamonds.png', flipped: false},
    { name: '/cards/8_of_hearts.png', flipped: false},
    { name: '/cards/ace_of_diamonds.png', flipped: false},
    { name: '/cards/jack_of_clubs.png', flipped: false},
]

function MainGame() {
const [cards, setCards] = useState(shuffle([...initialCards, ...initialCards]));
const [flippedCards, setFlippedCards] = useState([]);

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

function flip(index) {
    if (!cards[index].flipped) {
        setCards(prevCards => prevCards.map((card, i) => 
            i == index ? {...card, flipped: true} : card
        ));

        setFlippedCards(prevFlippedCards => {
            const newFlippedCards = [...prevFlippedCards, {...cards[index], index}];

            if (newFlippedCards.length == 2) {
                const [firstCard, secondCard] = newFlippedCards;
                if (firstCard.name !== secondCard.name) {
                    setTimeout(() => {
                        setCards(prevCards => prevCards.map(card =>
                                card.name == firstCard.name || card.name == secondCard.name ? {...card, flipped: false} : card
                            ));
                        setFlippedCards([]);
                    }, 1000);
                } else {
                    setFlippedCards([]);
                }
            }
            return newFlippedCards;
        });
    }
}

return (
    <div>
        <div>
            {cards.map((item, index) => (
                item.flipped ?
                <img src={item.name} /> :
                <img src='/card_backs/card_back_blue02.jpg' onClick={() => flip(index)} />
            ))}
        </div>
    </div>
)
}

export default MainGame;