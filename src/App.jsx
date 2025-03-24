import React, { useState, useEffect } from "react";
import "./App.css";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const quizArray1 = [
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
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    correctAnswer: "2",
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Leo Tolstoy",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is H2O commonly known as?",
    options: ["Water", "Hydrogen", "Oxygen", "Carbon Dioxide"],
    correctAnswer: "Water",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Hydrogen", "Carbon"],
    correctAnswer: "Oxygen",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the boiling point of water at sea level in Celsius?",
    options: ["90°C", "95°C", "100°C", "105°C"],
    correctAnswer: "100°C",
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
    question: "In which continent is Egypt located?",
    options: ["Asia", "Europe", "Africa", "South America"],
    correctAnswer: "Africa",
  },
  {
    question: "Who discovered gravity when an apple fell on his head?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    correctAnswer: "Isaac Newton",
  },
  {
    question: "What is the main language spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    correctAnswer: "Portuguese",
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Nitrogen",
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
    correctAnswer: "Charles Babbage",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Dollar", "Euro", "Yen", "Won"],
    correctAnswer: "Yen",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "What is the process by which plants make their food?",
    options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
    correctAnswer: "Photosynthesis",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "J.D. Salinger",
      "F. Scott Fitzgerald",
    ],
    correctAnswer: "Harper Lee",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    correctAnswer: "Au",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correctAnswer: "8",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "India"],
    correctAnswer: "Japan",
  },
  {
    question: "What is 5 multiplied by 6?",
    options: ["30", "11", "25", "35"],
    correctAnswer: "30",
  },
];

const quizArray2 = [
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
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswer: "Nile",
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
    correctAnswer: "Michelangelo",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Diamond", "Gold", "Iron", "Quartz"],
    correctAnswer: "Diamond",
  },
  {
    question: "What is the chemical symbol for Iron?",
    options: ["Fe", "Ir", "In", "I"],
    correctAnswer: "Fe",
  },
  {
    question: "How many bones are in the adult human body?",
    options: ["206", "205", "201", "210"],
    correctAnswer: "206",
  },
  {
    question: "What is known as the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
    correctAnswer: "Mitochondria",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    question: "Which planet has the most moons?",
    options: ["Mars", "Earth", "Saturn", "Venus"],
    correctAnswer: "Saturn",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "Nauru", "San Marino"],
    correctAnswer: "Vatican City",
  },
  {
    question: "In what year did the Titanic sink?",
    options: ["1912", "1905", "1920", "1915"],
    correctAnswer: "1912",
  },
  {
    question: "Who is known as the King of Pop?",
    options: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
    correctAnswer: "Michael Jackson",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    correctAnswer: "Mount Everest",
  },
  {
    question: "Which organ is primarily responsible for purifying our blood?",
    options: ["Heart", "Liver", "Kidney", "Lungs"],
    correctAnswer: "Kidney",
  },
  {
    question: "What is the freezing point of water in Celsius?",
    options: ["0°C", "32°C", "-1°C", "100°C"],
    correctAnswer: "0°C",
  },
  {
    question: "Who wrote the novel '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
    correctAnswer: "George Orwell",
  },
  {
    question: "What is the capital city of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    correctAnswer: "Ottawa",
  },
  {
    question: "Which is the smallest country in Africa by area?",
    options: ["Seychelles", "Gambia", "Mauritius", "Lesotho"],
    correctAnswer: "Seychelles",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Onion", "Pepper"],
    correctAnswer: "Avocado",
  },
  {
    question: "Which ocean is the deepest?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific",
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Marie Curie",
      "Alexander Fleming",
      "Louis Pasteur",
      "Gregor Mendel",
    ],
    correctAnswer: "Alexander Fleming",
  },
  {
    question: "What is the largest internal organ in the human body?",
    options: ["Heart", "Brain", "Liver", "Lungs"],
    correctAnswer: "Liver",
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "Brazil", "UK", "Russia"],
    correctAnswer: "Brazil",
  },
  {
    question: "What is the boiling point of water in Fahrenheit?",
    options: ["212°F", "100°F", "180°F", "32°F"],
    correctAnswer: "212°F",
  },
];

const quizArray3 = [
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
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Naples", "Florence"],
    correctAnswer: "Rome",
  },
  {
    question: "Who is the author of 'The Lord of the Rings'?",
    options: [
      "J.R.R. Tolkien",
      "C.S. Lewis",
      "George R.R. Martin",
      "J.K. Rowling",
    ],
    correctAnswer: "J.R.R. Tolkien",
  },
  {
    question: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "NaCl", "H2SO4"],
    correctAnswer: "H2O",
  },
  {
    question: "What is the tallest building in the world?",
    options: [
      "Burj Khalifa",
      "Shanghai Tower",
      "Empire State Building",
      "Taipei 101",
    ],
    correctAnswer: "Burj Khalifa",
  },
  {
    question: "In which year did World War II end?",
    options: ["1945", "1939", "1918", "1963"],
    correctAnswer: "1945",
  },
  {
    question: "Who painted 'Starry Night'?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Claude Monet",
      "Salvador Dalí",
    ],
    correctAnswer: "Vincent van Gogh",
  },
  {
    question: "What is the largest continent by area?",
    options: ["Africa", "Asia", "North America", "Europe"],
    correctAnswer: "Asia",
  },
  {
    question: "Which gas is essential for human respiration?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
    correctAnswer: "Oxygen",
  },
  {
    question: "What is the currency of the United Kingdom?",
    options: ["Euro", "Dollar", "Pound Sterling", "Yen"],
    correctAnswer: "Pound Sterling",
  },
  {
    question: "Which planet is famous for its rings?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: "Saturn",
  },
  {
    question: "What is the largest bone in the human body?",
    options: ["Femur", "Tibia", "Humerus", "Skull"],
    correctAnswer: "Femur",
  },
  {
    question: "Which language has the most native speakers worldwide?",
    options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
    correctAnswer: "Mandarin Chinese",
  },
  {
    question: "Who discovered America in 1492?",
    options: [
      "Christopher Columbus",
      "Vasco da Gama",
      "Ferdinand Magellan",
      "Marco Polo",
    ],
    correctAnswer: "Christopher Columbus",
  },
  {
    question:
      "What is the process by which a caterpillar becomes a butterfly called?",
    options: ["Metamorphosis", "Photosynthesis", "Hibernation", "Reproduction"],
    correctAnswer: "Metamorphosis",
  },
  {
    question: "Which instrument is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
    correctAnswer: "Thermometer",
  },
  {
    question: "What is the freezing point of water in Fahrenheit?",
    options: ["32°F", "0°F", "100°F", "212°F"],
    correctAnswer: "32°F",
  },
  {
    question: "What is the largest ocean in the world by surface area?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific",
  },
  {
    question: "Who was the first President of the United States?",
    options: [
      "Abraham Lincoln",
      "George Washington",
      "Thomas Jefferson",
      "John Adams",
    ],
    correctAnswer: "George Washington",
  },
  {
    question: "What is the smallest unit of life?",
    options: ["Atom", "Cell", "Molecule", "Organ"],
    correctAnswer: "Cell",
  },
  {
    question: "Which country is known for its tulip fields?",
    options: ["Netherlands", "Belgium", "Denmark", "Sweden"],
    correctAnswer: "Netherlands",
  },
  {
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "S", "K", "Si"],
    correctAnswer: "Na",
  },
  {
    question: "Which mathematical constant is approximately equal to 3.14159?",
    options: ["e", "pi", "phi", "gamma"],
    correctAnswer: "pi",
  },
  {
    question: "What is the longest river in South America?",
    options: ["Amazon", "Orinoco", "Paraná", "Marañón"],
    correctAnswer: "Amazon",
  },
];

const quizArray4 = [
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
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    correctAnswer: "Berlin",
  },
  {
    question: "What is the boiling point of water in Kelvin?",
    options: ["273 K", "373 K", "323 K", "293 K"],
    correctAnswer: "373 K",
  },
  {
    question: "Which planet is known for its Great Red Spot?",
    options: ["Mars", "Jupiter", "Saturn", "Neptune"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Jane Austen", "Emily Brontë", "Charles Dickens", "George Eliot"],
    correctAnswer: "Jane Austen",
  },
  {
    question: "What is the smallest bone in the human body?",
    options: ["Stapes", "Femur", "Tibia", "Humerus"],
    correctAnswer: "Stapes",
  },
  {
    question: "What gas do animals exhale?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    question: "Which country is home to the kangaroo?",
    options: ["Australia", "New Zealand", "South Africa", "Canada"],
    correctAnswer: "Australia",
  },
  {
    question: "What is the largest organ of the human body?",
    options: ["Heart", "Skin", "Liver", "Lungs"],
    correctAnswer: "Skin",
  },
  {
    question: "What is the primary language spoken in Argentina?",
    options: ["Portuguese", "Spanish", "English", "French"],
    correctAnswer: "Spanish",
  },
  {
    question: "What is the chemical symbol for potassium?",
    options: ["K", "P", "Pt", "Po"],
    correctAnswer: "K",
  },
  {
    question: "What year did the Berlin Wall fall?",
    options: ["1989", "1991", "1987", "1990"],
    correctAnswer: "1989",
  },
  {
    question: "Which famous scientist introduced the theory of evolution?",
    options: [
      "Albert Einstein",
      "Charles Darwin",
      "Isaac Newton",
      "Stephen Hawking",
    ],
    correctAnswer: "Charles Darwin",
  },
  {
    question: "What is the capital of Spain?",
    options: ["Barcelona", "Madrid", "Seville", "Valencia"],
    correctAnswer: "Madrid",
  },
  {
    question: "Who is the Greek god of the sea?",
    options: ["Zeus", "Hades", "Poseidon", "Apollo"],
    correctAnswer: "Poseidon",
  },
  {
    question: "Which element is represented by the symbol 'C'?",
    options: ["Calcium", "Carbon", "Copper", "Cesium"],
    correctAnswer: "Carbon",
  },
  {
    question: "Which instrument measures atmospheric pressure?",
    options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
    correctAnswer: "Barometer",
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["England", "France", "Spain", "Germany"],
    correctAnswer: "France",
  },
  {
    question: "Which continent is the smallest by land area?",
    options: ["Europe", "Australia", "Antarctica", "South America"],
    correctAnswer: "Australia",
  },
  {
    question: "What is the fastest land animal?",
    options: ["Cheetah", "Lion", "Elephant", "Gazelle"],
    correctAnswer: "Cheetah",
  },
  {
    question: "Who painted 'The Persistence of Memory'?",
    options: [
      "Pablo Picasso",
      "Salvador Dalí",
      "Vincent van Gogh",
      "Andy Warhol",
    ],
    correctAnswer: "Salvador Dalí",
  },
  {
    question: "Which element has the highest melting point?",
    options: ["Tungsten", "Iron", "Carbon", "Gold"],
    correctAnswer: "Tungsten",
  },
  {
    question: "What is the largest species of shark?",
    options: [
      "Great White Shark",
      "Hammerhead Shark",
      "Whale Shark",
      "Tiger Shark",
    ],
    correctAnswer: "Whale Shark",
  },
  {
    question: "What is the most widely spoken language in the world?",
    options: ["English", "Mandarin", "Spanish", "Hindi"],
    correctAnswer: "Mandarin",
  },
];

const quizArrays = [quizArray1, quizArray2, quizArray3, quizArray4];

const getRandomQuiz = () => {
  const randomIndex = Math.floor(Math.random() * quizArrays.length);
  return shuffleArray([...quizArrays[randomIndex]]);
};

function App() {
  const [questions, setQuestions] = useState(getRandomQuiz());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [lifelineUsed, setLifelineUsed] = useState(false);
  const [availableOptions, setAvailableOptions] = useState(
    questions[currentQuestion].options
  );

  // Reset available options when moving to a new question
  useEffect(() => {
    setAvailableOptions(questions[currentQuestion].options);
  }, [currentQuestion, questions]);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowScore(true);
    }
  };

  const handleLifeline = () => {
    // Only allow lifeline if not used and if answer hasn't been selected yet
    if (!lifelineUsed && selectedOption === null) {
      const current = questions[currentQuestion];
      const wrongOptions = current.options.filter(
        (option) => option !== current.correctAnswer
      );
      // Randomly choose one wrong option to keep along with the correct answer
      const randomWrong =
        wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
      const newOptions = [current.correctAnswer, randomWrong];
      // Optionally, shuffle the new options so correct answer isn’t always in the same place
      setAvailableOptions(shuffleArray(newOptions));
      setLifelineUsed(true);
    }
  };

  const restartQuiz = () => {
    setQuestions(getRandomQuiz());
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
    // Reset lifeline usage for new game
    setLifelineUsed(false);
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
                <div className="center-btn">
                  <div className="score-indicator">Score: {score}</div>
                </div>
              </div>
              {!lifelineUsed && selectedOption === null && (
                <button onClick={handleLifeline} className="lifeline-button">
                  50-50 lifeline
                </button>
              )}
            </div>

            <h2 className="question-text">
              {questions[currentQuestion].question}
            </h2>

            <div className="options-grid">
              {availableOptions.map((option, index) => (
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
