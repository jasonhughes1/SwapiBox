import React from 'react';
import './Card.css';

const Card = ({ cardData }) => {
  const cardKeys = Object.keys(cardData);
  const cards = cardKeys.map((key, index) => {
  const populateCard = cardData[dataReturn(key)];

    function dataReturn(key) {
      if (key === 'Residents') {
        cardData.Residents =
        cardData.Residents.map(resident => resident.name + ' ');
        return key;
      } else {
        return key;
      }
    }
    return (
      <div  key={index}>
        <h3>{key}</h3>
        <p>{populateCard}</p>
      </div>
    );
  });


  return (
    <article className='card-holder'>
    { cards }
    </article>
  );
};


export default Card;
