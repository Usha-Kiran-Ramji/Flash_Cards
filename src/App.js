import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import DeckForm from './components/DeckForm';
import FlashcardForm from './components/FlashcardForm';
import FlashcardList from './components/FlashcardList';
import QuizMode from './components/QuizMode';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Flashcard Quiz App</h1>
        <nav>
          <Link to="/">Create Deck</Link>
          <Link to="/add">Add Flashcard</Link>
          <Link to="/list">View Deck</Link>
          <Link to="/quiz">Start Quiz</Link>
        </nav>

        <Routes>
          <Route path="/" element={<DeckForm />} />
          <Route path="/add" element={<FlashcardForm />} />
          <Route path="/list" element={<FlashcardList />} />
          <Route path="/quiz" element={<QuizMode />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
