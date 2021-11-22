import React from 'react';
import cards from './cards';
import FlashCard from './components/flashcard/FlashCard';

const items = cards;

function App() {

  const selectCard = (card) =>{
    const sc = Math.floor(Math.random() * items.length) +1;
    return items[sc];
     
  }

  return (
    <div className="flashCard">
      <h1>Flash Card English</h1>

      <FlashCard
        card = {selectCard(items)}
      />


    </div>
      
  );
}

export default App;
