import React, { useState, useEffect } from 'react';
import '../App.css';

const FlashcardList = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndex, setFlippedIndex] = useState(null);

  useEffect(() => {
    // Dummy card data
    setCards([
      { front: "What is React?", back: "A JavaScript library for building user interfaces" },
      { front: "What is JSX?", back: "A syntax extension for JavaScript used with React" },
      { front: "What is a hook in React?", back: "A function that lets you use state and lifecycle features" },
      { front: "useState is used for?", back: "Managing component state" },
      { front: "useEffect is used for?", back: "Performing side effects in components" },
      { front: "What does props stand for?", back: "Properties passed from parent to child components" },
      { front: "What is a component?", back: "A reusable piece of UI in React" },
      { front: "Class components vs Functional components?", back: "Class use ES6 classes, Functional use hooks" },
      { front: "What is Virtual DOM?", back: "A lightweight copy of real DOM to optimize rendering" },
      { front: "What is Redux?", back: "A state management library" },
      { front: "What is the role of reducers in Redux?", back: "Functions that return new state based on actions" },
      { front: "What is an action in Redux?", back: "An object that describes a change" },
      { front: "What is a store in Redux?", back: "Holds the global state of the app" },
      { front: "What is useContext?", back: "A React hook to access context without prop drilling" },
      { front: "How do you lift state up?", back: "Move state to the closest common ancestor" },
      { front: "What are keys in React lists?", back: "Unique identifiers to help React track items" },
      { front: "What is the purpose of useRef?", back: "To reference DOM elements or persist values" },
      { front: "What is memoization?", back: "Optimization technique to avoid unnecessary renders" },
      { front: "What is React Router?", back: "Library to handle routing in React" },
      { front: "What does `exact` prop do in Route?", back: "Ensures exact path match" },
      { front: "What is the use of useNavigate?", back: "Programmatically navigate in React Router v6" },
      { front: "What is lazy loading?", back: "Loading components only when needed" },
      { front: "What is suspense used for?", back: "To handle lazy loaded components" },
      { front: "What is Prop Drilling?", back: "Passing props through multiple layers unnecessarily" },
      { front: "What is a Higher Order Component (HOC)?", back: "A function that returns a new component" },
      { front: "What is a Controlled Component?", back: "Form element whose value is controlled by React state" },
      { front: "What is a Fragment in React?", back: "Allows grouping elements without adding extra nodes" },
      { front: "What is the default port for React app?", back: "3000" },
      { front: "What is CRA?", back: "Create React App - tool to bootstrap React projects" },
      { front: "What is lifting state up?", back: "Sharing state by moving it to a common ancestor" },
      { front: "What is reconciliation?", back: "React’s process to update the DOM" },
      { front: "What is a Pure Component?", back: "Component that only renders if props/state change" },
      { front: "What is an event in React?", back: "React’s way of handling browser events" },
      { front: "What is TypeScript?", back: "A superset of JavaScript with static types" },
      { front: "What is the difference between == and ===?", back: "`===` checks type and value, `==` does type coercion" },
      { front: "What is a closure?", back: "Function that remembers variables from outer scope" },
      { front: "What is a promise?", back: "An object representing async operation result" },
      { front: "What is async/await?", back: "Syntax to write promises in synchronous style" },
      { front: "What are template literals?", back: "String literals allowing embedded expressions" },
      { front: "What is destructuring?", back: "Unpacking values from arrays/objects" },
      { front: "What is spread operator?", back: "Expands iterable into individual elements" },
      { front: "What is rest operator?", back: "Collects remaining elements into an array" },
      { front: "What is map() used for?", back: "Transforms each element of an array" },
      { front: "What is filter() used for?", back: "Returns array elements matching condition" },
      { front: "What is reduce() used for?", back: "Reduces array to single value" },
      { front: "What is useCallback?", back: "Memoizes a function to prevent re-renders" },
      { front: "What is useMemo?", back: "Memoizes a value to avoid recalculations" },
      { front: "What is an arrow function?", back: "Shorter syntax for function expressions" },
      { front: "What are default parameters?", back: "Provide default values to function arguments" },
      { front: "What is hoisting?", back: "Moving declarations to top of scope" },
    ]);
    
  }, []);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div
          className={`flashcard ${flippedIndex === index ? 'flipped' : ''}`}
          key={index}
          onClick={() => handleFlip(index)}
        >
          <div className="card-inner">
            <div className="front">{card.front}</div>
            <div className="back">{card.back}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlashcardList;
