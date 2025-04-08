import React, { useState, useEffect } from 'react';
import '../App.css'; // Optional: separate styling or use App.css

const sampleDeck = [
  { question: "What is React?", answer: "A JavaScript library for building UI" },
  { question: "What is JSX?", answer: "JavaScript XML" },
  { question: "What is useState?", answer: "React Hook to manage state" },
  { question: "What is a component?", answer: "Reusable piece of UI" },
  { question: "What is useEffect?", answer: "React Hook to handle side effects" },
  { question: "What are props?", answer: "Inputs to components passed from parent" },
  { question: "What is state?", answer: "An object that holds dynamic data in a component" },
  { question: "What is a hook?", answer: "Function to use React features in functional components" },
  { question: "What is a functional component?", answer: "A component defined using a function" },
  { question: "What is a class component?", answer: "Component defined using ES6 class" },
  { question: "What is virtual DOM?", answer: "A lightweight copy of the real DOM" },
  { question: "What is a key in React?", answer: "Unique identifier used in lists for performance" },
  { question: "What is lifting state up?", answer: "Sharing state between components by moving it to a common ancestor" },
  { question: "What is conditional rendering?", answer: "Rendering components based on a condition" },
  { question: "What is React Router?", answer: "Library for routing in React apps" },
  { question: "What is Redux?", answer: "State management library" },
  { question: "What is context API?", answer: "Way to pass data through component tree without props" },
  { question: "What is useContext?", answer: "Hook to consume context in functional components" },
  { question: "What is useRef?", answer: "Hook to persist values without re-rendering" },
  { question: "What is useMemo?", answer: "Hook to memoize expensive calculations" },
  { question: "What is useCallback?", answer: "Hook to memoize functions to avoid unnecessary renders" }
];


const QuizMode = () => {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(10); // 10 seconds per question

  useEffect(() => {
    if (!showResult) {
      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            handleNext();
            return 10;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [current, showResult]);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleAnswer = (correct) => {
    if (correct) setScore(score + 1);
    handleNext();
  };

  const handleNext = () => {
    setFlipped(false);
    setTimer(10);
    if (current < sampleDeck.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      <h2>Quiz Mode</h2>
      {!showResult ? (
        <>
          <div className="quiz-info">
            <p>Question {current + 1} of {sampleDeck.length}</p>
            <p>Time left: {timer}s</p>
            <p>Score: {score}</p>
          </div>

          <div className={`quiz-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
            {flipped ? sampleDeck[current].answer : sampleDeck[current].question}
          </div>

          <div className="quiz-buttons">
            <button onClick={() => handleAnswer(true)}>Correct</button>
            <button onClick={() => handleAnswer(false)}>Wrong</button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Quiz Completed!</h3>
          <p>Your Score: {score} / {sampleDeck.length}</p>
          <p>Percentage: {(score / sampleDeck.length * 100).toFixed(2)}%</p>
          <button onClick={() => {
            setCurrent(0);
            setScore(0);
            setShowResult(false);
            setTimer(10);
          }}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default QuizMode;
