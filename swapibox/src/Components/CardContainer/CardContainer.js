import React from 'react';
import Card from './../Card/Card.js';
import './CardContainer.css';

const CardContainer = ({ cardType}) => {
  if (cardType.length > 0) {
    const cards = cardType.map((card, index) =>
      <Card cardData={card}
                 key={index}
       />
    );

    return (
      <div className='card-container'>
        {cards}
      </div>
    );
  }
};



export default CardContainer;
