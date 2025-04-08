import React, { useState } from 'react';
import '../App.css';
function DeckForm() {
  const [deckName, setDeckName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (deckName.trim()) {
      const existingDecks = JSON.parse(localStorage.getItem('decks')) || [];
      const newDecks = [...existingDecks, deckName];
      localStorage.setItem('decks', JSON.stringify(newDecks));
      alert(`Deck "${deckName}" created!`);
      setDeckName('');
    }
  };
  

  return (
    <div>
      <h2>Create a New Deck</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter deck topic"
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
        />
        <button type="submit">Create Deck</button>
      </form>
    </div>
  );
}

export default DeckForm;
