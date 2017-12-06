import React from 'react';
import './Card.css';

const Card = ({ cardData }) => {
  const cardKeys = Object.keys(cardData);
  const cards = cardKeys.map((prop, index) => {
  const card = cardData[propReturn(prop)];
    
    function propReturn(prop) {
      if (prop === 'Residents') {
        cardData.Residents =
        cardData.Residents.map(resident => resident.name + ' ');
        return prop;
      } else {
        return prop;
      }
    }
    return (
      <div key={index}>
        <h3>{prop}</h3>
        <p>{card}</p>
      </div>
    );
  });


  return (
    <article className='card'>
      { cards }
    </article>
  );
};


export default Card;
