import React, { useState } from 'react';

function FlashcardForm() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const deckName = localStorage.getItem('deckName') || 'default';

    const existingDeck = JSON.parse(localStorage.getItem(deckName)) || [];

    const newCard = { question, answer };
    const updatedDeck = [...existingDeck, newCard];

    localStorage.setItem(deckName, JSON.stringify(updatedDeck));

    alert('Flashcard added!');
    setQuestion('');
    setAnswer('');
  };

  return (
    <div>
      <h2>Add Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="text"
          placeholder="Enter Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}

export default FlashcardForm;
