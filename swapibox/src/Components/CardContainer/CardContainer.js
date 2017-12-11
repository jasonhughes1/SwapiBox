import React from 'react';
import Card from './../Card/Card.js';
import './CardContainer.css';
import PropTypes from 'prop-types';


const CardContainer = ({ cardType, setFavorite, favArray}) => {
  // const favClass = favArray.filter(card => {
  //   card ===

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
    );
  }
};

CardContainer.propTypes = {
  cardType: PropTypes.array,
  setFavorite: PropTypes.func
};

export default CardContainer;
