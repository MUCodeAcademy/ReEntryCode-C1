import { useState } from "react";

function Quiz() {
    // Create an array of questions
    const questions = [
        {
            questionText: "What is 2 + 2",
            questionAnswers: ["0", "22", "4", "300"],
            correctAnswer: "4"
        },
        {
            questionText: "What position do arrays start at?",
            questionAnswers: ["0", "1", "-1", "None of the above"],
            correctAnswer: "0"
        },
    ];

    // State for score and current question
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [over, setOver] = useState(false);

    // Function to show the next question
    function nextQuestion() {
        // - Increase current question
        setCurrentQuestion(prevQuestion => {
            // Check to see if they have any questions left
            if (prevQuestion >= questions.length - 1) {
                setOver(true);
                return prevQuestion;
            } else {
                return prevQuestion += 1;
            }
        });
    }
    
    // Function to check the answer
    function checkAnswer(e) {
        // - If they got the right answer, increase score
        if (e.target.innerHTML == questions[currentQuestion].correctAnswer) {
            setScore(prevScore => prevScore++);
            // - Tell them whether they got it right or not
            setFeedback("Correct");
        } else {
            setFeedback("Incorrect");
        }
    }

    // Function to reset quiz
    function restart() {
        // - Set current question and score back to what it was before
        setCurrentQuestion(0);
        setScore(0);
        setFeedback("");
        setOver(false);
    }

    return (
        <div className="container">
            {over ?
                <div>
                    <button className="restart" onClick={restart}>Restart Quiz</button>
                    <h6 className="score"></h6> 
                </div>
                :
                <div>
                    <h2 className="question">{questions[currentQuestion].questionText}</h2>
                    <ul className="answers">
                        {questions[currentQuestion].questionAnswers.map((item) => (
                            <li>
                                <button onClick={(e) => checkAnswer(e)}>{item}</button>
                            </li>
                        ))}
                    </ul>
                    <h4 className="feedback">{feedback}</h4>
                    <button className="next" onClick={nextQuestion}>Next Question</button>
                </div>
            }
        </div>
    )
}

export default Quiz;