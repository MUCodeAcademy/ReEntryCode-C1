import { useState } from "react";

// Very simple quiz. There are a lot of ways you can write this, and a lot of extra things you can add.

function Quiz() {
    const questions = [
        {
            text: "What hook allows code to run at a certain point in the component's lifecycle?",
            answers: ["useEffect", "useState", "useRef", "useMemo"],
            correctAnswer: "useEffect",
        },
        {
            text: "Which is NOT a valid way to write a conditional statement?",
            answers: ["If-else statement", "Ternary Operator", "Switch-case statement", "Pseudocode"],
            correctAnswer: "Pseudocode",
        },
        {
            text: "Why did the developers of React create the virtual DOM?",
            answers: [
                "idk they felt like it or something",
                "They are big fans of Jamiroquai",
                "It's more efficient than working with the real DOM",
                "They hate software developers",
            ],
            correctAnswer: "It's more efficient than working with the real DOM",
        },
        {
            text: "What is the lowest food group in the food pyramid?",
            answers: ["Sweets", "Grains", "Dairy", "Meat"],
            correctAnswer: "Grains",
        },
        {
            text: "What is the highest psychological group in Maslow's Hierarchy of Needs?",
            answers: ["Self-Actualization", "Safety", "Love and Belonging", "Esteem"],
            correctAnswer: "Self-Actualization",
        },
    ];

    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [finished, setFinished] = useState(false);

    function nextQuestion() {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setFinished(true);
        }
    }

    function checkAnswer(answer) {
        if (questions[currentQuestion].correctAnswer === answer) {
            setScore(prev => prev + 1);
        }
        nextQuestion();
    }

    return (
        <div>
            <h1>Quiz</h1>
            {finished ? (
                <h3>Score: {score} / {questions.length}</h3>
            ): (
                <>
                    <h3>{questions[currentQuestion].text}</h3>
                    <ul>
                        {questions[currentQuestion].answers.map((item, index) => (
                            <li key={index}><button onClick={() => checkAnswer(item)}>{item}</button></li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}

export default Quiz;