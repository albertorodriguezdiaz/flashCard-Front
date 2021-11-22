import React from 'react';

const FlashCard = ({card}) => {

    const {id, word, meaning, kind} = card;

    return ( 
        <div className="card" key={id}>
            <p className="idText">{id}</p>
            <h2>{word}</h2>
            <h3>{meaning}</h3>
            <p className="kindText">{kind}</p>
        </div>
     );
}
 
export default FlashCard;