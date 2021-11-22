import React from 'react';

const FlashCard = ({card}) => {

    const {word, meaning, kind } = card;

    return ( 
        <div>
            <h2>{word}</h2>
            <h3>{meaning}</h3>
            <p>{kind}</p>
        </div>
     );
}
 
export default FlashCard;