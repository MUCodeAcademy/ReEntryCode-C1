import { useState } from "react";


function QuoteGenerator() {
    const quotes = [
        { 
            content: "It does not matter how slowly you go as long as you do not stop.", 
            author: "Confucius"
        },
        { 
            content: "The only thing we have to fear is fear itself.", 
            author: "Franklin D. Roosevelt"
        },
        { 
            content: "Fly, you fools!", 
            author: "Gandalf"
        },
        {
            content: "Time is money.", 
            author: "Benjamin Franklin"
        },
        { 
            content: "You must be the change you wish to see in the world.", 
            author: "Mahatma Gandhi"
        },
        {
            content: "I'll be back.",
            author: "The Terminator"
        }
    ];

    const [randomQuote, setRandomQuote] = useState({
        content: "Click the button to get a random quote!",
        author: "Justin Luce"
    });

    const [previousQuoteIndex, setPreviousQuoteIndex] = useState(null);
    
    function generate() {
        // This ensures that it doesn't pick the same quote twice
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
        } while (randomIndex === previousQuoteIndex);

        setRandomQuote(quotes[randomIndex])
        setPreviousQuoteIndex(randomIndex);
    }

    return (
        <div>
            <h3 id='quote'>"{randomQuote.content}" - {randomQuote.author}</h3>
            <button onClick={() => generate()}>Generate Quote</button>
        </div>
    )
}

export default QuoteGenerator;