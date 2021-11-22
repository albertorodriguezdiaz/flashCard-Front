import React from 'react';

const FlashCard = ({card}) => {

    const {id, word, meaning, kind} = card;

    return ( 
        <div className="card" key={id}>
            <p>{id}</p>
            <h2>{word}</h2>
            <h3>{meaning}</h3>
            <p>{kind}</p>
        </div>
     );
}
 
export default FlashCard;