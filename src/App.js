import React, {useState, useEffect} from 'react';
import cards from './cards';
import FlashCard from './components/flashcard/FlashCard';


function App() {

  const items = cards;

  let [seconds, setSeconds] = useState(0);

  const selectCard = (card) =>{
    const sc = Math.floor(Math.random() * items.length) +1;
    return items[sc];
  }

  let cardSelect = selectCard(items);

  useEffect(() => {
    const time = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 60000);
    return () => clearInterval(time);
  }, []);

  return (
    <div className="flashCard">
      <h1>Flash Card English</h1>

      <FlashCard
        card = {cardSelect}
        time={seconds}
      />


    </div>
      
  );
}

export default App;
