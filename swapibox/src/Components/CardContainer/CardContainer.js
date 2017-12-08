import React from 'react';
import Card from './../Card/Card.js';
import './CardContainer.css';

const CardContainer = ({ cardType, setFavorite }) => {
  if (cardType.length > 0) {
    const cards = cardType.map((card, index) =>
      <Card cardData={card}
                 key={index}
                 setFavorite={setFavorite}
       />
    );

    return (
      <div className='card-container'>
        <div className='cards'>{cards}</div>
      </div>
    );
  } else {
    return (
      <h2 className='select-favs'>There are no favorites!</h2>
    )
  }
};



export default CardContainer;
