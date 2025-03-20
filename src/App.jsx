import React, { useState } from "react";
import "./App.css";

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const initialQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
    correctAnswer: "Harper Lee",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Silver", "Iron"],
    correctAnswer: "Oxygen",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    correctAnswer: "2",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: "Japan",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    correctAnswer: "Diamond",
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Stephen Hawking",
      "Galileo Galilei",
    ],
    correctAnswer: "Albert Einstein",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra",
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Nitrogen",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "Which country is famous for inventing pizza?",
    options: ["France", "Italy", "Spain", "Greece"],
    correctAnswer: "Italy",
  },
  {
    question: "What is the square root of 64?",
    options: ["4", "6", "8", "10"],
    correctAnswer: "8",
  },
  {
    question: "Who is known as the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    correctAnswer: "Charles Babbage",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Won", "Yen", "Ringgit"],
    correctAnswer: "Yen",
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Lion", "Tiger", "Elephant", "Gorilla"],
    correctAnswer: "Lion",
  },
  {
    question: "What is the largest desert in the world?",
    options: [
      "Sahara Desert",
      "Arabian Desert",
      "Gobi Desert",
      "Antarctic Desert",
    ],
    correctAnswer: "Antarctic Desert",
  },
];

function App() {
  const [questions, setQuestions] = useState(
    shuffleArray([...initialQuestions])
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true); // Correct answer
    } else {
      setIsCorrect(false); // Incorrect answer
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsCorrect(null); // Reset correctness state
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setQuestions(shuffleArray([...initialQuestions])); // Shuffle questions on restart
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <div className="app-container">
      <div className="quiz-wrapper">
        <div className="quiz-header">
          <h1 className="quiz-title">Quick Quiz</h1>
          <p className="quiz-subtitle">
            Test your knowledge across various topics
          </p>
        </div>

        {showScore ? (
          <div className="score-box">
            <div className="score-display">
              {score}
              <span className="score-total">/{questions.length}</span>
            </div>
            <h2 className="score-message">
              {score === questions.length
                ? "Perfect Score! 🎉"
                : "Quiz Completed!"}
            </h2>
            <button onClick={restartQuiz} className="play-again-button">
              Play Again
            </button>
          </div>
        ) : (
          <div className="quiz-content">
            <div className="quiz-info">
              <div className="question-count">
                Question{" "}
                <span className="current-question">{currentQuestion + 1}</span>{" "}
                of {questions.length}
              </div>
              <div className="score-indicator">Score: {score}</div>
            </div>

            <h2 className="question-text">
              {questions[currentQuestion].question}
            </h2>

            <div className="options-grid">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={selectedOption !== null}
                  className={`option-button ${
                    selectedOption === option
                      ? isCorrect
                        ? "option-correct"
                        : "option-incorrect"
                      : "option-default"
                  } ${selectedOption !== null ? "disabled" : "hover-scale"}`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="progress-section">
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{
                    width: `${
                      ((currentQuestion + 1) / questions.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
              <button
                onClick={handleNextQuestion}
                disabled={!selectedOption}
                className={`next-button ${
                  selectedOption ? "active-next" : "inactive-next"
                }`}
              >
                {currentQuestion === questions.length - 1 ? "Finish" : "Next →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
