import React from 'react';

const FlashCard = ({card, time}) => {

    const {id, word, meaning, kind} = card;

    return ( 
        <div className="card" key={id}>
            <p className="idText">{id}</p>
            <h2>{word}</h2>
            <h3>{meaning}</h3>
            <p className="kindText">{kind}</p>
            <p className="idTime">{time}</p>
        </div>
     );
}
 
export default FlashCard;